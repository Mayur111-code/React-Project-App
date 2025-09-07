import React, { useEffect } from "react";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import Secoundcard from "../../assets/Secoundcard";
import AOS from "aos";
import "aos/dist/aos.css";

const Feturedcard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row g-4">
          {Secoundcard.map((property, index) => (
            <div
              key={property.id}
              className="col-md-3"
              data-aos="fade-up"
              data-aos-delay={index * 100} 
            >
              <div className="card shadow-sm h-100">
               
                <div className="position-relative">
                  <img
                    src={property.img}
                    className="card-img-top"
                    alt={property.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <span
                    className="badge bg-success position-absolute"
                    style={{ top: "10px", left: "10px" }}
                  >
                    {property.price}
                  </span>
                </div>

                
                <div className="card-body">
                  {/* Agent Info */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted">
                      <img
                        src={property.aimg}
                        style={{ width: "40px" }}
                        alt="agent"
                        className="rounded-circle me-2"
                      />
                      {property.agent}
                    </small>
                    <small className="text-muted">{property.time}</small>
                  </div>

                 
                  <h5 className="card-title">{property.title}</h5>

                  
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted">
                      <FaMapMarkerAlt className="me-1" /> {property.location}
                    </small>
                    <span
                      className={`badge ${
                        property.priceType === "Sale"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {property.priceType}
                    </span>
                  </div>

                 
                  <div className="d-flex justify-content-between text-muted mt-3">
                    <small>
                      <FaBed className="me-1" /> {property.beds}
                    </small>
                    <small>
                      <FaBath className="me-1" /> {property.baths}
                    </small>
                    <small>
                      <FaRulerCombined className="me-1" /> {property.area}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feturedcard;
