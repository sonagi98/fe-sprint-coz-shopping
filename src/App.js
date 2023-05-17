import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import ProductList from './Pages/ProductList';
import Bookmark from './Pages/Bookmark';


function App() {
  const [allItems, setItemList] = useState([]);

  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => {
      setItemList(res.data)
    })
  }, []);

  return (
    <div> 
      <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<Main items={allItems}/>}/>
          <Route path='/products/list' element={<ProductList/>}/>
          <Route path='/bookmark' element={<Bookmark/>}/>
        </Routes>

        <Footer/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
