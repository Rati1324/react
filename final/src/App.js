import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from './components/Products';
import Checkout from './components/Checkout';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Link to="/checkout">Checkout</Link>
          <Routes>
            <Route path="products" element={<Products />} />
            <Route path="/products/:productId" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
