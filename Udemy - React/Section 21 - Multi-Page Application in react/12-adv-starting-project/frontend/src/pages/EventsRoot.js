import React from 'react'
import EventNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router'
export default function EventsRoot() {
  return (
    <>
    <EventNavigation/>
    <Outlet/>
    </>
  )
}
