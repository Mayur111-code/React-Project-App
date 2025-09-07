
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About2.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-fluid py-5 mt-5 mb-5">
      <div
        className="row align-items-center text-center text-md-start mx-auto px-3"
        data-aos="fade-up"
      >
       
        <div className="col-12 col-md-8 mb-4 mb-md-0" data-aos="fade-right">
          <h2 className="fw-bold">Find Best Place For Living</h2>
          <p className="text-muted">
            Discover top properties and locations for your perfect lifestyle.
          </p>
        </div>

       
        <div
          className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start"
          data-aos="fade-left"
        >
          <button
            type="button"
            className="btn btn-outline-secondary fw-bold px-4 py-2 rounded-pill shadow-sm"
            onClick={() => navigate("/contact")}
            style={{ transition: "all 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About2;

