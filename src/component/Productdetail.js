import React,{useState} from 'react'
import { Data } from '../Data'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {additem,deleteitem} from "../redux/action/Action"

function Productdetail() {

const [cartbtn,setCartbtn]=useState("Add to Cart")
const proid=useParams()
const prodetail=Data.filter(x=>x.id===proid.id)
const product=prodetail[0];
console.log(product)

const dispatch=useDispatch()
 
const handlecart=(product)=>{
  if(cartbtn==="Add to Cart"){
    dispatch(additem(product))
    // console.log(additem)
    setCartbtn("Remove to Cart")
  }
    else{
      dispatch(deleteitem(product))
      setCartbtn("Add to Cart")
    }
  }

  return (
  <>
  <div className="container my-5 py-3">
      <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
              <img src={product.image} alt ="product detail" height="500px" width="400px"></img>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 className='display-5 fw-bold'> {product.name}</h1>
        <hr/>
        <h3 className='my-4'>${product.price}</h3>
        <p> Color: {product.color}</p>
        <p> Febric: {product.febric}</p>
        <p> Sleeve: {product.sleeve}</p>
        <p> Shape: {product.shape}</p>
        <p> Pattern: {product.pattern}</p>
        <p >Decription: {product.description}</p>
        <button onClick={()=>handlecart(product)} className='btn btn-outline-primary my-5' >{cartbtn} </button>

          </div>
      </div>
  </div>
  </>
  )
}

export default Productdetail