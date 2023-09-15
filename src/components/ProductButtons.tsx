import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from '.';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }:Props) => {

  //TODO: maxCount
  const { increaseBy, counter, maxCount } = useContext( ProductContext );

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    // () => {
    // return counter === maxCount ? true : false
    // },
  [counter, maxCount]);

  
  return (
    <div
      className={ `${styles.buttonsContainer} ${className}` }
      style={ style }
    >
      <button
        className={ styles.buttonMinus }
        onClick={ () => increaseBy( -1 ) } > - </button>
      <div className={ styles.countLabel } > { counter } </div>
      <button
        className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disabled }` }
        onClick={ () => increaseBy( +1 ) }
        disabled={ isMaxReached() }> + </button>
    </div>
  );
};