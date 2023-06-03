/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba en <CounterApp />', () => {

    const value = 100;

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={value}/> );
        expect( container ).toMatchSnapshot();

    });


    test('debe de mostrar el valor inicial de 100', () => {

        render( <CounterApp value={value}/> );
        expect( screen.getByText(value) ).toBeTruthy();
        // expect( screen.getByRole('heading', {level:2}).innerHTML ).toContain(value.toString());

    });

    test('debe de incrementar con el boton +1', () => {

        render( <CounterApp value={value}/> );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText(value+1) ).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => {

        render( <CounterApp value={value}/> );
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText(value-1) ).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => {
        
        render( <CounterApp value={value}/> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}));

        expect( screen.getByText(value) ).toBeTruthy();
    });

});