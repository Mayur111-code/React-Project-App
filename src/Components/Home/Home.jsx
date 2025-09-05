import React from "react";

import { FaHome, FaBuilding, FaTree, FaWarehouse } from "react-icons/fa";

import CarouselData from "../../assets/Homepage.js"; 
import './Home.css'
import Newsection from "../Middlesection/Newsection.jsx";



const Home = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
      
        <div className="carousel-indicators">
          {CarouselData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

      
        <div className="carousel-inner">
          {CarouselData.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.img}
                className="d-block w-100 carousel-img"
                alt={item.title}
              />
              <div className="carousel-caption bg-dark bg-opacity-50 p-2 rounded text-center">
                <h5 className="text-sm md:text-base text-lg md:text-2xl display-1">{item.title}</h5>
                <p>{item.desc}</p>

                <button type="button" className="btn btn-info btn-lg learn-morebtn">LEARN MORE <i className="fas fa-arrow-right"></i></button>

              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
<div className="Buy-Rent-btns">
<button type="button" className="btn btn-outline-primary btn-lg">Buy Properties</button>
<button type="button" className="btn btn-outline-secondary btn-lg">Rent Properties</button>
</div>

<div className="container-center">
   <div className="row g-3 align-items-center">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Enter Keyword" />
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Residential</option>
            <option>Commercial</option>
            <option>Plot</option>
          </select>
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search Location" />
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>$100</option>
            <option>$500</option>
            <option>$1000</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-success w-100">SEARCH</button>
    </div>

  </div>
  <Newsection/>
    
</div>









    </div>
  );
};

export default Home;
