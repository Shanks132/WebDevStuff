import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function ProductDetails() {
  const params = useParams();
  return (
  <>
    <div>Product {params.productId}</div>
    <Link to=".." relative='path'></Link>
  </>
  )
}
