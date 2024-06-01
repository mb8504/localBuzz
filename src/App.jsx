import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Beers from './pages/Beers';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="beers" element={<Beers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
