import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionHouseimg from "../Middlesection/SectionHouseimg";
import AboutSection from "./About1st";
import About2 from "./About2";
import About3 from "./About3";
import Testimonials from "./Testimonials";
import About4 from "./About4";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [hover, setHover] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontFamily: "Arial, sans-serif",
        }}
        data-aos="fade-down"
      >
        <h1
          style={{
            color: hover ? "#e5b115ff" : "#333",
            fontWeight: "bolder",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          About Us
        </h1>
      </div>

      <SectionHouseimg data-aos="zoom-in" />

      {/* Home Button */}
      <div className="d-flex justify-content-center py-5" data-aos="fade-up">
        <button
          className="btn btn-info btn-sm fw-bold px-4 rounded-pill shadow-sm"
          onClick={() => nav("/")}
          style={{
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Home
        </button>
      </div>

      {/* Import components with AOS */}
      <div data-aos="fade-up">
        <AboutSection />
      </div>

      <SectionHouseimg data-aos="fade-up" />

      <div data-aos="fade-right">
        <About2 />
      </div>

      <div data-aos="fade-left">
        <About3 />
      </div>

      <div data-aos="zoom-in">
        <Testimonials />
      </div>

      <div data-aos="fade-up">
        <About4 />
      </div>
    </>
  );
};

export default About;
