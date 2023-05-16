import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Rout, Router } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Pages/ProductList';
import Bookmark from './Pages/Bookmark';

function App() {
  return (
    <div> 
      <BrowserRouter>
      <div className="App">
        <Header/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
