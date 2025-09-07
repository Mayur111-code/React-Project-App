import React from 'react';
import './SectionHouseimg.css';
import bg_4 from '../../assets/bg_4.jpg';
import { FaPlay } from "react-icons/fa";

const Houseimg2 = () => {
  return (
    <div className="img-container position-relative text-center text-light">
      {/* Background Image */}
      <img src={bg_4} alt="House" className="img-fluid" />

      {/* Overlay Content */}
      <div className="overlay d-flex flex-column justify-content-center align-items-center">
        <h2 className="fw-bold mb-3">Modern House Video</h2>
        <p className="mb-4">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        
        {/* Play Button */}
        <a
          href="https://www.youtube.com/watch?v=ysz5S6PUM-U" // your YouTube link
          target="_blank"
          rel="noopener noreferrer"
          className="play-btn"
        >
          <FaPlay size={30}/>
        </a>
      </div>
    </div>
  );
};

export default Houseimg2;
