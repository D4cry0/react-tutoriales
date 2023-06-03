import { getSaludo } from "../../src/base-pruebas/02-template-string";
// Se ejecuta todo el archivo

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola Arny"', () => {

        const name = "Arny";
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);
    });
});
