import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import addItem from '../redux/reducer/addItem';


function Cartbtn() {

  const state=useSelector((state)=>state.cartitem)
  return (
    <>
  <Link  to ="/cart"className="btn btn-outline-primary ms-2">
    <span className='fa fa-shopping-cart me-1'></span> Cart({state.length})
  </Link>
    </>
  )
}

export default Cartbtn