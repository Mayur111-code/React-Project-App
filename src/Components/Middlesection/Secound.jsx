import React from 'react'


const Secound = () => {
  return (



    <div className="container my-5">
      <div className="row g-4">
        {Secoundcard.map((property) => (
          <div key={property.id} className="col-md-3">
            <div className="card shadow-sm h-100">

              <div className="position-relative">
                <img
                  src={property.img}
                  className="card-img-top"
                  alt={property.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <span
                  className="badge bg-success position-absolute"
                  style={{ top: "10px", left: "10px" }}
                >
                  {property.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="card-body">
                {/* Agent Info */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted">
                    <img
                      src={property.aimg} style={{ width: '40px' }}
                      alt="agent"
                      className="rounded-circle me-2"
                    />
                    {property.agent}
                  </small>
                  <small className="text-muted">{property.time}</small>
                </div>

                {/* Title */}
                <h5 className="card-title">{property.title}</h5>


                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted">
                    <FaMapMarkerAlt className="me-1" /> {property.location}
                  </small>
                  <span
                    className={`badge ${property.priceType === "Sale" ? "bg-success" : "bg-danger"
                      }`}
                  >
                    {property.priceType}
                  </span>
                </div>


                <div className="d-flex justify-content-between text-muted mt-3">
                  <small>
                    <FaBed className="me-1" /> {property.beds}
                  </small>
                  <small>
                    <FaBath className="me-1" /> {property.baths}
                  </small>
                  <small>
                    <FaRulerCombined className="me-1" /> {property.area}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Secound