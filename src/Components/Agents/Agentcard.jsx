import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import AgentsData from "../../assets/Agentsdata";
import AOS from "aos";
import "aos/dist/aos.css";

const Agentcard = () => {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // initialize AOS
  }, []);

  useEffect(() => {
    if (hovered !== null) {
      console.log("Hovered agent:", AgentsData[hovered].name);
    }
  }, [hovered]);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {AgentsData.map((agent, index) => (
          <div
            key={agent.id}
            className="col-md-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={index * 100} // delay for stagger effect
          >
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: "10px", overflow: "hidden" }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div style={{ overflow: "hidden" }}>
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "300px",
                    minHeight: "300px",
                    display: "block",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform: hovered === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>

              {/* Info section */}
              <div
                className="card-body text-center text-white"
                style={{
                  backgroundColor: "#4CAF50",
                  transition: "box-shadow 0.3s ease",
                  boxShadow:
                    hovered === index
                      ? "0px -4px 15px rgba(0,0,0,0.3) inset"
                      : "none",
                }}
              >
                <p style={{ fontSize: "12px", letterSpacing: "1px" }}>
                  LISTING {agent.properties}
                </p>
                <h5 style={{ fontWeight: "600" }}>{agent.name}</h5>
                <div
                  className="d-flex justify-content-center gap-3 mt-2"
                  style={{ fontSize: "16px" }}
                >
                  <a href="#" style={{ color: "#fff" }}>
                    <FaTwitter />
                  </a>
                  <a href="#" style={{ color: "#fff" }}>
                    <FaFacebookF />
                  </a>
                  <a href="#" style={{ color: "#fff" }}>
                    <FaGoogle />
                  </a>
                  <a href="#" style={{ color: "#fff" }}>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agentcard;
