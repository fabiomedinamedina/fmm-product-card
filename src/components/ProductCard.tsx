import React, { CSSProperties, createContext } from 'react';

import { useProducts } from '../hooks';
import { InitialValues, Product, ProductCardHOCProps, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';


import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers ) => JSX.Element ;
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?:number;
  initialValues?: InitialValues 
}

const ProductCardHOC = ({ children, product, className, style, onChange, value, initialValues }:Props) => {

  const { 
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset
  } = useProducts({ onChange, product, value, initialValues });
  
  return (
    <Provider value={{
      counter,
      increaseBy,
      maxCount,
      product
    }}>
      <div
        className={ `${ styles.productCard  } ${ className }` }
        style={style}
      >
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  );
};

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});