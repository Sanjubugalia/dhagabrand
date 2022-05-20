import React from 'react'

function Signup() {
  return (
<>
<button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupmodal">
 <span className='fa fa-user-plus me-1'> </span>Sign up
</button>
<div className="modal fade" id="signupmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Sign up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className='btn btn-primary w-100 mb-2'> 
         <span className='fa fa-google me-2'> </span> Sing in with Google
        </button>
        <button className='btn btn-primary w-100 mb-2'> 
         <span className='fa fa-facebook me-2'> </span> Sing in with Facebook
        </button>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
</form>
      </div>  
    </div>
  </div>
</div>
</>
  )
}

export default Signup