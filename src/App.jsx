<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Beers from './pages/Beers';
import Locals from './pages/Locals';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="beers" element={<Beers />} />
        <Route path="locals-only" element={<Locals />} />
      </Routes>
    </BrowserRouter>
  );
};
=======
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
>>>>>>> parent of 6573330 (finished beers page)

  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
    </>
  )
}

export default App
