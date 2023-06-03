
describe('Pruebas en <Component />', () => {

    test('Esta prueba no debe de fallar', () => {
        const ms1 = 'Hola Mundo';
    
        const ms2 = ms1.trim();
    
        // Para evitar hacer ifs, try catch etc.
        // Lo hacen por ti
        expect( ms1 ).toBe( ms2 );
    });

});
