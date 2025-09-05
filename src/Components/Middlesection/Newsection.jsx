// src/Components/Categories/Categories.jsx
import React from "react";

import { FaBuilding, FaTree, FaHome, FaIndustry, } from "react-icons/fa";


import Featured from "./Featured";
import SectionHouse from "./SectionHouseimg";
const places = [
  { id: 1, name: "New York", properties: 200 },
  { id: 2, name: "California", properties: 100 },
  { id: 3, name: "Florida", properties: 422 },
  { id: 4, name: "London", properties: 100 },
  { id: 5, name: "Tennessee", properties: 200 },
  { id: 6, name: "Charlotte", properties: 200 },
  { id: 7, name: "Chicago", properties: 120 },
  { id: 8, name: "Texas", properties: 200 },
  { id: 9, name: "Orlando", properties: 200 },
  { id: 10, name: "Illinois", properties: 300 },
  { id: 11, name: "North Carolina", properties: 200 },
  { id: 12, name: "Atlanta", properties: 200 },
];

const Newsection = () => {
  return (
    <>
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Explore Our Categories & Places</h2>

        
        <div className="row mb-5">
          <div className="col-md-3 col-6 mb-3">
            <div className="p-4 border bg-light">
              <FaTree size={80} color="green" />
              <h6>Land</h6>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="p-4 border bg-light">
              <FaHome size={80} color="green" />
              <h6>Residential</h6>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="p-4 border bg-light">
               <FaBuilding size={80} color="green" />
              <h6>Commercial</h6>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="p-4 border bg-light">
              <FaIndustry size={80} color="green" />
              <h6>Industrial</h6>
            </div>
          </div>
        </div>

        <div className="row">
          {places.map((place) => (
            <div key={place.id} className="col-md-4 col-6 mb-4">
              <h6 className="fw-bold">{place.name}</h6>
              <p className="text-success">
                {place.properties} Properties
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* import used Featured component */}
    <Featured/>
    <SectionHouse/>
    </>
  );
};

export default Newsection;
