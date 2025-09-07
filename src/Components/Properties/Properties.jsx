import React, { useState, useEffect } from "react";
import SectionHouse from "../Middlesection/SectionHouseimg";
import Searchcomp from "../Searchcomp";
import Feturedcard from "../Middlesection/Feturedcard";
import Pagesno from "../Pagesno";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  const [hover, setHover] = useState(false);

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
            color: hover ? "#1549e5ff" : "black", 
            fontWeight: "bolder",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Properties
        </h1>
      </div>

      <SectionHouse />
      <Searchcomp />
      <Feturedcard />
      <Feturedcard />
      <Pagesno />
    </>
  );
};

export default Properties;
