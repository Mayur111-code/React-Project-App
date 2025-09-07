import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import '@fortawesome/fontawesome-free/css/all.min.css';


// aos 


import AOS from "aos";
import "aos/dist/aos.css";


{/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQPSWt6p4K5Q1L7+f7R5iSFG8cW+XhG7+l4dSe+g5dS1Z7sLzwCqe7L3e8F2C2QA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/> */}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
