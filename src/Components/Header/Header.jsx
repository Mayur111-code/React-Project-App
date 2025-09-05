import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>


<div className="Header">

<div className="container-fluid text-light py-2">
  <div className="row align-items-center text-center text-md-start gy-2">
    
    <div className="col-12 col-md d-flex align-items-center justify-content-center justify-content-md-start">
      <div className="text ps-md-3">
        <p className="mb-0 fw-bold">
          <i className="fa-solid fa-phone me-2"></i>
          <span className="free-call">Free Call:</span> <span>+1 234 456 78910</span>
        </p>
        <small>Call Us Now 24/7 Customer Support</small>
      </div>
    </div>
  
    <div className="col-12 col-md d-flex align-items-center justify-content-center justify-content-md-start">
      <div className="icon d-flex justify-content-center align-items-center me-2">
        <i className="fa-solid fa-location-dot"></i>
      </div>
      <div className="text">
        <p className="mb-0 fw-bold">Our Location</p>
        <small>Suite 721 New York NY 10016</small>
      </div>
    </div>

   
    <div className="col-12 col-md d-flex align-items-center justify-content-center justify-content-md-start">
      <div className="icon d-flex justify-content-center align-items-center me-2">
        <i className="fa-brands fa-connectdevelop"></i>
      </div>
      <div className="text">
        <p className="mb-0 fw-bold">
          <span className="free-call">Connect</span> with us
        </p>
        <small>
          <a href="#" className="text-light me-2 text-decoration-none">
            <i className="fa-brands fa-facebook me-1"></i>Facebook
          </a>
          <a href="#" className="text-light me-2 text-decoration-none">
            <i className="fa-brands fa-twitter me-1"></i>Twitter
          </a>
          <a href="#" className="text-light text-decoration-none">
            <i className="fa-brands fa-dribbble me-1"></i>Dribbble
          </a>
        </small>
      </div>
    </div>

  </div>
</div>
</div>


    </div>
  )
}

export default Header;