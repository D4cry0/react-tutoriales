import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('To love ru');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });

        // Nota se pueden evaluar las estructuras de los textos
        // algo tipo regex si se desea
     });


 });