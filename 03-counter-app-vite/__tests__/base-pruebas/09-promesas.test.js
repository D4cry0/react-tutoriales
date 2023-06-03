import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
                .then( hero => {
                    
                    expect( hero ).toEqual({
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    });
                    
                    // Es para indicarle que llegando a ese punto
                    // finalice la prueba
                    done();
                });

    });

    test('getHeroeByIdAsync debe de obtener un error si no existe', (done) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
                .catch( error => {

                    expect( error ).toBe(`No se pudo encontrar el héroe ${id}`);
                    

                    done();
                });

    });

});