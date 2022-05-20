import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './component/Home';
import About from './component/About';
import Allproduct from './component/Allproduct';
import Contact from "./component/Contact"
import Login from "./component/Login"
import Singup  from "./component/Signup"
import Header from "./component/Header"
import Productdetail from './component/Productdetail';
import Product from './component/Product';
// import "font-awesome/css/font-awesome.min.css";
import Footer from "./component/Footer"
import store from './redux/Store';
import { Provider } from 'react-redux';
import  Cart from "./component/Cart";
import Checkout from './component/Checkout';
import NavProduct from './component/NavProduct';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
       <Provider store={store}> 
         <Header/>
      <Routes>   
        <Route exact path="/" element={<Home/>}> </Route>
        <Route exact path="/about" element={<About/>}> </Route>
        <Route  path="/login" element={<Login/>}> </Route>
        <Route  path="/singup" element={<Singup/>}> </Route>
        <Route  path="/allproduct" element={<Allproduct/>}> </Route>
        <Route  path="/cart" element={<Cart/>}> </Route>
        <Route  path="/product" element={<Product/>}> </Route>
        <Route  path="/contact" element={<Contact/>}> </Route>
        <Route  path="/checkout" element={<Checkout/>}> </Route>
       <Route path ="/productdetail/:id" element={<Productdetail/>}></Route>
      </Routes>
         </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
