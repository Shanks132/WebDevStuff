import React from 'react'
import { Link } from 'react-router-dom';
const Dummy_Events = [
  {
    id:"e1",
    title:"event 1"
  },
  {
    id:"e2",
    title:"event 2"
  }
];

export default function EventsPage() {
  return (
    <>
    <div>Events Page</div>
    <ul>
      {Dummy_Events.map((event)=>(
        <Link to={`${event.id}`} key={event.id}>{event.title}</Link>
        ))
      }
    </ul>
    </>
  )
}
