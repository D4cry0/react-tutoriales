import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1;

        const hero = getHeroeById( id );

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeById debe retornar undefined si no existe el ID', () => {

        const id = 100;

        const hero = getHeroeById( id );

        // con eso puede evaluar nulo o undefined incluso false
        expect( hero ).toBeFalsy();
        // expect( hero ).toBe( undefined );

    });

    test('getHeroesByOwner debe retornar un heroe por Owner DC', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );
        
        
        expect( heroes.length ).toBe( 3 );

        // Se puede como hard code o lo ideal seria con filters
        expect( heroes ).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }]);
    });

    test('getHeroesByOwner debe retornar un heroe por Owner Marvel', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );
        
        
        expect( heroes.length ).toBe( 2 );

        // uso ideal
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
    });

});