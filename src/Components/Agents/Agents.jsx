
import React, { useState, useEffect } from "react";
import Searchcomp from "../Searchcomp";

import Pagesno from "../Pagesno";
import AOS from "aos";
import "aos/dist/aos.css";
import Agentcard from "./Agentcard";

const Properties = () => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    
      <div
        className="text-center mt-4"
        style={{ fontFamily: "Arial, sans-serif" }}
        data-aos="fade-down"
        data-aos-delay="200"
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
         Agents
        </h1>
      </div>

      {/* Other Components */}
     
     <Searchcomp style={{ marginTop: '10px' }} />

     <Agentcard/>
      <Pagesno />
    </>
  );
};

export default Properties;

