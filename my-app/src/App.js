// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import { Product } from './components/Product';
import { Products } from './components/Products';
import { SpecificProduct } from './components/SpecificProduct';
import { Cart } from './components/Cart';
import { Signup } from './components/Signup';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/signup" element = {<Signup/>}></Route>
      <Route path="/products" element = {<Products/>}></Route>
      <Route path="/products/:id" element = {<SpecificProduct/>}></Route>
      <Route path="/cart" element = {<Cart/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
