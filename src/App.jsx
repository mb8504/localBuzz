import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Hops from './components/Hops'
import Cards from './components/Cards'

const App = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <Hops />
      <Cards />
      <div>
        testing
      </div>
    </>
  )
}

export default App
