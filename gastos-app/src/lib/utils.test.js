// Tests unitarios realizados con Vitest
import { describe, it, expect } from 'vitest';
import { sumar, esMontoValido } from './utils';

//Verifica lo que pide la funcion
describe('Funciones utilitarias', () => {
  it('debe sumar dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it('debe validar un monto positivo', () => {
    expect(esMontoValido(100)).toBe(true);
    expect(esMontoValido(0)).toBe(false);
  });
});