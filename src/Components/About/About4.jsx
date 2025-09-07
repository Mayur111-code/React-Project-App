import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";

import Aboutimg4 from '../../assets/Aboutimg4'

const About4 = () => {


    useEffect(()=>{
            AOS.init({
                duration:2000,
                once:true,
            })
        }, []);

  return (
    <>
      <div className='row justify-content-center' data-aos="fade-out" style={{cursor:'pointer'}} >
        {Aboutimg4.map((item) => (
          <div key={item.id} className="col-md-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.img} className="card-img-top" alt="about-img" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default About4
