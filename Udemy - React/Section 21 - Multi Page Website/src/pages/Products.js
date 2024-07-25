import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
  {id:"p1",title:"product-1"},
  {id:"p2",title:"product-2"},
  {id:"p3",title:"product-3"},
]

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <Link to="/">return</Link>
      <ul>
        {PRODUCTS.map((prod)=>(
          <li key={prod.id}>
            <Link to={`${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
