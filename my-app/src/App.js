// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Routes>
      <Route path="/" element = {<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
