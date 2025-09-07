import React, { useState, useEffect } from "react";
import BlogData from "../../assets/Blogdata";
import SectionHouse from "../Middlesection/SectionHouseimg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      {/* Heading */}
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
            color: hover ? "#052185ff" : "black",
            fontWeight: "bolder",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Blog
        </h1>
      </div>

     
        <SectionHouse />
  

    
      <div className="container py-5">
        <div className="row">
          {BlogData.map((blog, index) => (
            <div
              key={blog.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger animation for each card
            >
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={blog.img}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
                    <span className="fw-bold">{blog.author}</span> &nbsp;{" "}
                    {blog.date} &nbsp;
                    <span className="text-success">{blog.comments}</span>
                  </p>
                  <h6 className="card-title fw-bold">{blog.title}</h6>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "14px" }}
                  >
                    {blog.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
