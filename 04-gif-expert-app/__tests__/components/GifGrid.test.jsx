/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Hace un mock completo de este path
jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => { 
    
    /* 

        En este caso donde hay un custom hook no es obligación de este
        componente asegurar el comportamiento real del hook
        para eso se hace otra prueba del hook.

        Aqui se van a usar simulaciones de hook
    
    */

    const category = 'Dreamcatcher';

    test('debe mostrar el loading inicial', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } /> );

        // screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

    });
    
    
    test('debe de mostrar items cuando se cargan las imagenes por el useFetchGifs', () => { 
        
        // fixtures
        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: '123',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );


        expect( screen.getAllByRole('img').length ).toBe(2);

        
    });

});