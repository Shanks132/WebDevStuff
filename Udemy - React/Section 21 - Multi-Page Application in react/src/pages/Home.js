import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
    <div>
     <h1>Home</h1>
      <p><NavLink to="products">Go to product listing</NavLink></p>
    </div>
  )
}
