import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

export default function Details(props) {
  let params = useParams();
  const productsData = useSelector((state) => state.products.data);
  const [product, setProduct] = useState()

  useEffect(() => {
    setProduct(productsData[0].find(i => i.id == params.productId));
  }, [])

  return (
    <>
      {product && product.title}
    </>
  )
}
