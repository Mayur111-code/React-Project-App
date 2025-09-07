import React from "react";
import TestimonialData from "../../assets/TestimonialData";

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {TestimonialData.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 p-4 h-100">
                <p className="card-text mb-4">❝ {item.desc} ❞</p>
                <div className="d-flex align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-0">{item.name}</h5>
                    <small className="text-success fw-bold">{item.job}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
