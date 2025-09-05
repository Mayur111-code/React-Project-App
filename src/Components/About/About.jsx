import React from 'react'
import { useNavigate } from "react-router-dom";
import SectionHouseimg from '../Middlesection/SectionHouseimg';
import AboutSection from './About1st';
import About2 from './About2';
import About3 from './About3';
const About = () => {
    const nav = useNavigate();
  return (
    <>

<SectionHouseimg/>
<div className='d-flex justify-content-center py-5'>
<button className='btn btn-info btn-sm fw-bold px-4 rounded-pill shadow-sm' onClick={()=> nav("/")} >Home</button>
</div>

{/* import component  */}
<AboutSection/>
<SectionHouseimg/>
<About2/>
<About3/>
    </>
  )
}

export default About