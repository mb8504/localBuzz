// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
// import Header from './pages/Home/components/Header'
// import Carousel from './pages/Home/components/Carousel'
// import Hops from './pages/Home/components/Hops'
// import Cards from './pages/Home/components/Cards'
// import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Home from './pages/Home/index'

const App = () => {

  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
    </>
  )
}

export default App
