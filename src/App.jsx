import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Carousel from './components/Carousel'

const App = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <div>
        testing
      </div>
    </>
  )
}

export default App
