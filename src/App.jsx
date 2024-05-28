import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from '../src/pages/Home/Header'
import Carousel from '../src/pages/Home/Carousel'
import Hops from '../src/pages/Home/Hops'
import Cards from '../src/pages/Home/Cards'

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
