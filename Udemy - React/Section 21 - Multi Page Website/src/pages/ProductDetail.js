import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetailPage() {
  const params = useParams();
  return (
    <>
    <h1>Product Details for {params.productId}</h1>
    <p>
      <Link to=".." relative="path">Back</Link>
    </p>
    <p>
      <Link to=".." relative="route">Back to home</Link>
    </p>
    </>

  )
}
