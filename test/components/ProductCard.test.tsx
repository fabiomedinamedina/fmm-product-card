import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en ProductCard', () => {
  
  test('Debería mostrar los children del componente correctamente', () => {
    
    render(
      <ProductCard product={ product2 }>
        {
          () => (
            <h1>Product Card</h1>
          )
        }
      </ProductCard>
    );

    expect( screen.getByText('Product Card') ).toBeTruthy();

  });

  test('Debería incrementar el contador al presionar el botón', () => {
    
    render(
      <ProductCard product={ product2 }>
        {
          ({ count, increaseBy }) => (
            <>
              <h1>Product Card</h1>
              <h2>{ count }</h2>
              <button onClick={ () => increaseBy(3) } >Increase</button>
            </>
          )
        }
      </ProductCard>
    );

    const btnIncrease = screen.getByRole('button');
    const titleCount = screen.getByRole('heading', { level: 2 });

    fireEvent.click( btnIncrease );

    expect( titleCount.innerHTML ).toBe('3');

  });

  test('Debería mostrar el valor inicial de contador', () => {
    
    render(
      <ProductCard product={ product2 } initialValues={ {count: 15} } >
        {
          ({ count, increaseBy }) => (
            <>
              <h1>Product Card</h1>
              <h2>{ count }</h2>
            </>
          )
        }
      </ProductCard>
    );

    const titleCount = screen.getByRole('heading', { level: 2 });


    expect( titleCount.innerHTML ).toBe('15');

  });

  test('NO Debería mostrar un numero mayor que el count', () => {
    
    render(
      <ProductCard product={ product2 } initialValues={ {count: 15, maxCount: 16} } >
        {
          ({ count, increaseBy }) => (
            <>
              <h1>Product Card</h1>
              <h2>{ count }</h2>
              <button onClick={ () => increaseBy(3) } >Increase</button>
            </>
          )
        }
      </ProductCard>
    );

    const btnIncrease = screen.getByRole('button');
    const titleCount = screen.getByRole('heading', { level: 2 });

    fireEvent.click( btnIncrease );

    expect( titleCount.innerHTML ).toBe('16');

  });


})