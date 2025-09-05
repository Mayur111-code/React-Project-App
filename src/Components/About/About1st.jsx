import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import CountUp from "react-countup";
import about from '../../assets/about.jpg'
import about_1 from '../../assets/about_1.jpg'
import AboutStats from "../../assets/Aboutstates";


const AboutSection = () => {

    useEffect(()=>{
        AOS.init({
            duration:2000,
            once:true,
        })
    }, []);

  return (
    <div className="container my-5" data-aos="fade-up" >
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6">
          <img
            src={about}
            alt="About Us"
            // className="img-fluid rounded"
             style={{width:'500px'}}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h6 className="text-success fw-bold">ABOUT US</h6>
          <h2 className="fw-bold">Oakberry A Real Estate Company</h2>
          <p className="text-muted">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>

          {/* Dynamic Counter Stats */}
          <div className="row text-center mt-4">
            {AboutStats.map((stat) => (
              <div key={stat.id} className="col-6 col-md-3 mb-3">
                <h3 className="fw-bold">
                  <CountUp end={stat.value} duration={3} />
                  {stat.suffix}
                </h3>
                <p className="text-success small">{stat.label}</p>
              </div>
            ))}
          </div>

 <div className="text-center">
        <img
          src={about_1}
          alt="About Us"
          className="img-fluid rounded shadow"
          style={{ Width: "900px" }}
        />
      </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
