/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";

import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 

    test('debe hacer match con el snapshot', () => { 
        const { container } = render( <GifExpertApp /> );
        
        expect( container ).toMatchSnapshot();
    });

    test('debe cambiar el valor del texto', () => { 
        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Dreamcatcher' }});

        expect( input.value ).toBe('Dreamcatcher');
    });

    test('debe agregar el card item', () => { 
        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Dreamcatcher' }});
        fireEvent.submit( form );

        expect( screen.getByText('Dreamcatcher') ).toBeTruthy();
    });

    test('debe haber el mismo numero de card items a los terminos de busqueda', () => { 
        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Dreamcatcher' }});
        fireEvent.submit( form );
        fireEvent.input( input, { target: { value: 'BLack lagon' }});
        fireEvent.submit( form );

        // screen.debug();

        expect( screen.getAllByText('Cargando...').length ).toBe(3);
    });

});