import React from 'react';

import { Link } from 'react-router-dom';
import Cartbtn from './Cartbtn';
import Login from "./Login"
import Signup from './Signup';

function Header() {


const searchhandlle=()=>{
  
}

  return (
    <>
    
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid py-2">
    <Link className="navbar-brand" to="/"><h3> <b> Dhaga</b></h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link" >Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
        <input type="search" onChange={()=>{searchhandlle()}}> </input> 
        </li>


      </ul>
    
   
          <Login/>
          <Signup/>
          <Cartbtn/>
        
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header