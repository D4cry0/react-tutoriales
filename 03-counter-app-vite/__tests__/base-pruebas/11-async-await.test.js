import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar un URL de la imagen', async() => {

        const url = await getImagen();

        // expect( typeof url ).toBe('string');
        expect( typeof url ).toBe('string');
        // La prueba puede llegar a pasar si aparece el "No se encontro la imagen del try-catch"
        
    });



});