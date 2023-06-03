/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Maison GIF by Dreamcatcher';
    const url = 'https://media0.giphy.com/media/tVEhC7m5M6A99SZw9g/giphy.gif?cid=40ebb390eutzo6m0s9lyy10v79teg19m0pyldr1c9ygh8o6x&rid=giphy.gif&ct=g';

    test('Snapshot', () => {
        const { container } = render( <GifGridItem title={ title } url={ url } /> );

        expect( container ).toMatchSnapshot();
    });


    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifGridItem title={ title } url={ url } /> );
        
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });
    
    test('debe de mostrar el titulo en el componente', () => {
        render( <GifGridItem title={ title } url={ url } /> );
        
        expect( screen.getByText( title ) ).toBeTruthy();
    });
});