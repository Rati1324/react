import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Product from './Product';
import { increase } from '../slices/productsSlice';

export default function Checkout() {
  const inCartData = useSelector((state) => state.products.inCart);
  const dispatch = useDispatch();

  return (
    <div>
      {inCartData.productObjects && inCartData.productObjects.map(c => (
        <>
          {/* {c.product.id} */}
          <Product key={c.product.id} productData={c.product} action="add more" handleClick={() => increase(c.product.id)}/>
        </>
      ))}
      <br/>
      Total price:{inCartData.totalPrice}
    </div>
  )
}
