import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Gallery from './pages/Gallery';
import Showroom from './pages/Showroom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/showroom" element={<Showroom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
