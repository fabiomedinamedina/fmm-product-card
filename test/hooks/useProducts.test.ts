import { act, renderHook } from '@testing-library/react';
import { useProducts } from '../../src/hooks/useProducts';
import { product } from '../data/products';

describe('Pruebas en hook useProducts', () => {
  
  test("Debería retornar el estado inicial", () => {
    
    const { result } = renderHook( () => useProducts({product}) );

    expect( result.current ).toEqual({
      counter: 0,
      isMaxCountReached: false,
      maxCount: undefined,
      increaseBy: expect.any(Function),
      reset: expect.any(Function),
    })

  });

  test("Debería retornar el estado con el initialValues", () => {

    const initialValues = {
      count: 10,
      maxCount: 20
    }
    
    const { result } = renderHook( () => useProducts({product, initialValues}) );

    expect( result.current ).toEqual({
      counter: 10,
      isMaxCountReached: false,
      maxCount: 20,
      increaseBy: expect.any(Function),
      reset: expect.any(Function),
    });

  });

  test("Debería aumentar el counter en 5", () => {

    const initialValues = {
      count: 10,
      maxCount: 17
    }
    
    const { result } = renderHook( () => useProducts({product, initialValues}) );

    act(() => {
      result.current.increaseBy(5)
    })


    expect( result.current ).toEqual({
      counter: 15,
      isMaxCountReached: false,
      maxCount: 17,
      increaseBy: expect.any(Function),
      reset: expect.any(Function),
    });

  });

  test("Debería aumentar el counter en 5 y mostrar isMaxCountReaced en true", () => {

    const initialValues = {
      count: 10,
      maxCount: 15
    }
    
    const { result } = renderHook( () => useProducts({product, initialValues}) );

    act(() => {
      result.current.increaseBy(5)
    })


    expect( result.current ).toEqual({
      counter: 15,
      isMaxCountReached: true,
      maxCount: 15,
      increaseBy: expect.any(Function),
      reset: expect.any(Function),
    });

  });

  test("Debería mostrar el counter con el value inicial", () => {
    
    const { result } = renderHook( () => useProducts({product, value: 7}) );


    expect( result.current ).toEqual({
      counter: 7,
      isMaxCountReached: false,
      maxCount: undefined,
      increaseBy: expect.any(Function),
      reset: expect.any(Function),
    });

  });

  test("Debería hacer el reset correctamente", () => {
    const { result } = renderHook( () => useProducts({product, value: 7}) );

    act(() => {
      result.current.increaseBy(15);
      result.current.reset()
    })
    
    expect( result.current ).toEqual({
      counter: 7,
      isMaxCountReached: false,
      maxCount: undefined,
      increaseBy: expect.any(Function),
      reset: expect.any(Function),
    });
  });
  
  

})