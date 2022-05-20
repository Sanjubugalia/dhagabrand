import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react';
import {deleteitem} from "../redux/action/Action"
import addItem from '../redux/reducer/addItem';
import { Link } from 'react-router-dom';


function Cart() {
    const state=useSelector((state)=>state.cartitem)  
    console.log("cartitem",state.length)
    
    // const dispatch=useDispatch()
    // const handleclose=(item)=>{
    //  dispatch(deleteitem(item))
    // }

const cartitemdetail =(cartitem)=>{
return(
    <div className='px-4 my-5 bg-light rounded-3' key={cartitem.id}>
 <div className="container py-4">
      <button className='btn-close float-end' 
    //   onClick={()=>handleclose(state)} 
      aria-label='close'></button> 
<div className="row justify-content-center">
    <div className="col-md-4">
<img src={cartitem.image} alt={cartitem.name} height="200px" width="180px"></img>
    </div>
    <div className="col-md-4">
<h3> {cartitem.name}</h3>
<p className='lead fw-bold'>${cartitem.price}</p>
    </div>
</div>
</div>
  </div> 
)

}
const emptycart=()=>{
    return(
        <>
        <div className='px-4 my-5 bg-light rounded-3'>
 <div className="container py-4">
     <div className="row">
         <h3>Your cart is empty</h3>
     </div>
    </div>
    </div>
        </>
    )
}
const button=()=>{
    return(
        <div className="container">
        <div className="row">
            
            <Link to="/checkout" className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to Checkout</Link>
        </div>
    </div>

    )
   
}

  return (
   <>

   { state.length === 0 && emptycart()}
   { state.length !==0 && state.map(cartitemdetail)}
   { state.length !==0 && button()}

   </>
  )
}

export default Cart