import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-5">
              <h3 className="text-center mb-4 fw-bold">Get in Touch</h3>
              <form>
               
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

               
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

               
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
