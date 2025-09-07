import React from 'react'
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Feturedcard from './Feturedcard';
const Featured = () => {


    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    return(
   <>
      <section className="py-5">
        <div className="container text-center" >
          <h2 className="fw-bold mb-5" data-aos="fade-in" >Featured Properties</h2>
        </div>
      </section>

<Feturedcard/>
    </>
    
  )
}

export default Featured;