import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login';
import Products from './components/Products';
import Productdetails from './components/Productdetails';
import Addtocart from './components/Addtocart';


function App() {
  return (
    <div className='background'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/productdetails' element={<Productdetails></Productdetails>}></Route>
        <Route path='/addtocart' element={<Addtocart></Addtocart>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
