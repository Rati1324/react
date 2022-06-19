import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom"

export default function Product(props) {
  const dispatch = useDispatch();

  return (
    <div>
      {props.productData && props.productData.title}
      <br/>{props.productData.price}$
      <img src={props.productData.image}></img>
      <button onClick={() => dispatch(props.handleClick())}>{props.action}</button>
      <Link to={`/products/${props.productData.id}`} key={props.productData.id}>Details</Link>
    </div>
  )
}
