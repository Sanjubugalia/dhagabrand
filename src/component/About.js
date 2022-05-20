import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className="container py-5 my-5 ">
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-primary fw-bold mb-4'>About us</h1>
         <p className="lead mb-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Eveniet vel, porro fugit, totam ad nulla assumenda ipsum 
           laborum autem quo tempora quae mollitia sunt, commodi molestias 
           aut perferendis? Totam, molestias.
         </p>
         <Link to="/contact" className="btn btn-outline-primary px-3">Contact us</Link>
        </div>
<div className="col-md-6 d-flex justify-content-center">
  <img src="./image/about-3.jpg" alt='about us' height="400px" width="500px"/>
</div>
      </div>
    </div>
    </>
  )
}

export default About