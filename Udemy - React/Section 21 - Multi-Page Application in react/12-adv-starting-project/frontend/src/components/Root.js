import React from 'react'
import { useNavigation } from 'react-router'
import MainNavigation from "./MainNavigation"
import { Outlet } from 'react-router'
export default function Root() {
  // const navigation = useNavigation();
 
  return (
    <main>
    <MainNavigation/>
    {/* {navigation.state === 'loading' && <p>Loading ...</p>} */}
    <Outlet/>
    </main>
  )
}
