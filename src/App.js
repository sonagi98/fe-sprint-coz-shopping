import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import ProductList from './Pages/ProductList';
import Bookmark from './Pages/Bookmark';

function App() {
  return (
    <div> 
      <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/bookmark' element={<Bookmark/>}/>
        </Routes>

        <Footer/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
