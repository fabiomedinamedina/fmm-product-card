import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductsArgs {
  product: Product;
  onChange?: ( product: onChangeArgs ) => void
  value?: number;
  initialValues?: InitialValues
}

export const useProducts = ({ onChange, product, value = 0, initialValues }:useProductsArgs) => {
  
  const [counter, setCounter] = useState<number>( initialValues?.count || value );
  const isMounted = useRef(false); 

  const increaseBy = ( value: number ) => {

    let newValue = Math.max( counter + value, 0 );

    if( initialValues?.maxCount ){
      newValue = Math.min( newValue, initialValues.maxCount );
    }

    setCounter( newValue );
    onChange && onChange({ count: newValue, product });
  }

  const reset = () => {
    setCounter( initialValues?.count || value );
  }

  

  useEffect(() => {
    if(!isMounted.current) return;
    setCounter( initialValues?.count || value );
  }, [value, initialValues?.count]);


  useEffect(() => {
    isMounted.current = true
  }, []);
  
  
  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
