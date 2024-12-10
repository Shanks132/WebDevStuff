import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home() {
  return (
    <div>
     <h1>Home</h1>
      <p><NavLink to="/events">Go to Events</NavLink></p>
    </div>
  )
}
