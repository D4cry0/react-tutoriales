/**
 * @jest-environment jsdom
 */
// Este bloque es necesario lo pide Jest para el environmet

import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {

    const title = 'Hola, soy Goku';
    const nombre = 'Arny';

    test('debe hacer match con el snapshot', () => {

        const {container} = render( <FirstApp title={title} />);

        expect( container ).toMatchSnapshot();
    });

    test('debe de monstrar el mensaje "Hola, Soy Goku"', () => {

        render( <FirstApp title={title} />);
        // screen.debug();
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => {

        render( <FirstApp title={title} />);
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        render( 
            <FirstApp 
                title={title} 
                nombre={nombre} 
            />
        );
        expect( screen.getAllByText(nombre).length ).toBe(2);

    });
});

