import React from 'react'


const Searchcomp = () => {
  return (
    <>
    

    <div className="Buy-Rent-btns">
    <button type="button" className="btn btn-outline-primary btn-lg">Buy Properties</button>
    <button type="button" className="btn btn-outline-secondary btn-lg">Rent Properties</button>
    </div>
    
    <div className="container-center">
       <div className="row g-3 align-items-center">
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Enter Keyword" />
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Plot</option>
              </select>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Search Location" />
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option>$100</option>
                <option>$500</option>
                <option>$1000</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success w-100">SEARCH</button>
        </div>
    
      </div>
      
        
    </div>
    
    
   
    
    
    </>
  )
}

export default Searchcomp