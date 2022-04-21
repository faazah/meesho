// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import { Product } from './components/Product';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/products" element = {<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
