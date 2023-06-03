/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={ () => {} } /> );
       
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'To love ru' } });

        expect( input.value ).toBe('To love ru');
        // screen.debug();

        // Si alguien modifica el codigo y no cambia el estado marca un error
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue    = 'To love ru';
        // Mock es una simulación
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        // para los forms se pide un aria-label para que lo pueda
        // encontrar
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        // Con esto nos aseguramos de que la funcion se llame
        // asi aseguramos el correcto funcionamiento
        expect( onNewCategory ).toHaveBeenCalled();
        // Para indicar que se llamo x numero de veces
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => { 
        
        const inputValue    = '';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });

 });