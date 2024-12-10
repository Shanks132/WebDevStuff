import React from 'react'
import { NavLink } from 'react-router-dom'

let DUMMY_PRODUCTS=[{id:'p1',title:'prod-1'},
  {id:'p2',title:'prod-2'},
  {id:'p3',title:'prod-3'},
  {id:'p4',title:'prod-4'},]
export default function Products(){
  return (
  <div>
    <h1>Products</h1>
    <div className='links'>
    {DUMMY_PRODUCTS.map((prod)=>(
      <h3>
        <NavLink to={`${prod.id}`} >{prod.title}</NavLink>
      </h3>
    ))}
    </div>
  </div>
  )
}
