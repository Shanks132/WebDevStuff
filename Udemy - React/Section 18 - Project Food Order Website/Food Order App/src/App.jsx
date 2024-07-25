/* eslint-disable no-unused-vars */

import { useEffect, useState, createContext } from 'react'
import './App.css'
import Header from './Components/Header'
import Items from './Components/Items'
import Cart from "./Components/Cart"

export const Context = createContext();
function App() {
  let [menu, setMenu] = useState([])
  let [cart, setCart] = useState({});

  const [cartOpen, setCartOpen] = useState(false)
  function handleCartClose() {
    setCartOpen(false)
  }
  function handleCartOpen() {
    setCartOpen(true)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/menu");
      const resData = await response.json();
      setMenu(resData.products)
      console.log(resData.products)
    }
    fetchData()
  }, [])
  return (

    <main className='bg-[#1b170a]'>

      <Context.Provider value={[cart, setCart]}>
        <Cart open={cartOpen} handleCartClose={handleCartClose} />
        <Header handleOpenCart={handleCartOpen} />
        <div className='mx-12 grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4 justify-items-center items-center text-white ' >
          {
            menu.map(item => (
              <Items
                key={item._id}
                description={item.description}
                foodName={item.name}
                foodPic={item.foodPic}
                price={item.price}
              />
            ))
          }
        </div>

      </Context.Provider>
    </main>
  )

}

export default App
