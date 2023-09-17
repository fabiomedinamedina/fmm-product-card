import React from 'react';
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('Testing ProductTitle', () => {
  
  test('Debería mostrar el titulo correctamente', () => {
    const { container } = render( <ProductTitle title='Producto Prueba' />  );
   
    expect( container ).toMatchSnapshot();
    expect( screen.getByText( 'Producto Prueba' ) ).toBeTruthy();

  });

  test('Debería mostrar la clase correctamente', () => {

    render( <ProductTitle className='class-test' title='Producto de prueba' /> );
    const title = screen.getByText( 'Producto de prueba', { selector: '.class-test' } );
    expect( title ).toBeTruthy();
    
  });

  test('Debería mostrar el componente con el nombre del producto', () => {
    
    render(
      <ProductCard product={ product }>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );

    expect( screen.getByText( product.title ).innerHTML ).toBeTruthy();

  });

})