import { types } from "../../../src/auth/types/types";


describe('Pruebas es "Types.js"', () => {

    test('Debe regresar estos types', () => {
        expect(types).toEqual( {
            login: '[Auth] Login', 
            logout: '[Auth] Logout' 
        })
    });
});