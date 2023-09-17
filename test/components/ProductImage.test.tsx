import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en ProductImage', () => {
  
  test('Debería mostrar la imagen por defecto', () => {
    
    render( <ProductImage /> );
    const image = screen.getByRole('img') as HTMLImageElement;
    
    expect(image.src).toContain('no-image.jpg');

  });

  test('Debería mostrar la imagen enviada por parametro', () => {
    
    render( <ProductImage img='imagen.jpg' /> );
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image.src).toContain('imagen.jpg');

  });

  test('Debería mostrar el componente con la imagen del producto', () => {
    
    render(
      <ProductCard product={ product2 }>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );

    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image.src).toContain(product2.img);

  });

})