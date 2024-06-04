import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Locals from './pages/Locals';
import Footer from './components/Footer';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="beers" element={<Beers />} />
        <Route path="locals-only" element={<Locals />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App
