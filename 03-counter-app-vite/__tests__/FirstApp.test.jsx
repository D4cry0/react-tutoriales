/**
 * @jest-environment jsdom
 */
// Este bloque es necesario lo pide Jest para el environmet

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {

    // test('debe de hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Goku';
    //     const { container, getByText } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();
    // });

    test('debe mostrar el titulo en un h1', () => {

        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

        // que exista
        expect( getByText(title) ).toBeTruthy();

        // Otra forma para asegurarnos de que este en tag indicado
        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title );

        expect( getByTestId('test-title').innerHTML ).toBe( title );

        // es menos estricto con los espacios, mayus etc.
        // expect( getByTestId('test-title').innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtiulo enviado por props', () => {

        const title = 'Hola, soy Goku';
        const nombre = 'Arny';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title } 
                nombre={ nombre } 
            /> 
        
        );

        // Por si ocupas mas elementos iguales
        expect( getAllByText( nombre ).length ).toBe(2);

    });

});

