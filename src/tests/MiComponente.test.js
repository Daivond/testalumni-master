import {titleCase, divide, sum, isapple} from '../components/MiComponente'

describe('funciones dentro del componente MiComponente', () => {
    describe('titleCase', () => {
        test('debe retornar un string vacío si se le pasa un string vacío', () => {
            const result = titleCase('');
            expect(result).toBe('');
        })

        test('debe retornar un string', () =>
        {   //Compruebo si la ejecuación de la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string')
        })

        test('debe retornar el string transformado', () => 
        {
            const result = titleCase('es una string chiquitita');
            expect(result).toBe('Es Una String Chiquitita');

        })


    });

    
    describe('sum', () => {
        test('debe retornar un número si los sumandos son números', () =>
        {   //Compruebo si la ejecuaciónd e la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })
        test('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })

    });

    describe('divide', () => {
        test('debe retornar un número', () => {
            const result = divide(10, 2);
            expect(typeof result).toBe('number');
        });
    
        test('debe retornar null si se le pasa una string', () => {
            const result = divide('hola', 2);
            expect(result).toBeNull();
        });
    
        test('debe realizar la división de 10 y 2', () => {
            const result = divide(10, 2);
            expect(result).toBe(5);
        });
    
        test('debe realizar la división de 10 y 4 con precisión', () => {
            const result = divide(10, 4);
            expect(result).toBeCloseTo(2.5);
        });
    
        test('debe retornar null si el divisor es 0', () => {
            const result = divide(5, 0);
            expect(result).toBeNull();
        });
    });
    
    describe('isapple', () => {
        test('debe retornar un resultado de tipo boolean', () => {
            const result = isapple('manzana');
            expect(typeof result).toBe('boolean');
        });
    
        test('debe devolver true si entra la string manzana', () => {
            const result = isapple('manzana');
            expect(result).toBeTruthy();
        });
    
        test('debe devolver false si entra una string que no sea manzana', () => {
            const result = isapple('pera');
            expect(result).toBeFalsy();
        });
    });

});