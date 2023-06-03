import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('debe retornar un string y un numero', () => {

        const [ letters, numbers ] = retornaArreglo();

        // Si buscas una prueba exacta de valores
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe( 123 );

        // Se busca que sea de algun tipo especifico
        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        // Se busca que sea cualquier string
        expect( letters ).toEqual( expect.any(String) );
    });

});