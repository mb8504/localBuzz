import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Locals from './pages/Locals';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="beers" element={<Beers />} />
        <Route path="locals-only" element={<Locals />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App
