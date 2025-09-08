// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App;

import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Properties from './Components/Properties/Properties';
import Agents from './Components/Agents/Agents';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/Pagenotfound';


const App = () => {
  return (
    <div>
      <Header/>
      <NavBar />
      
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

       <Footer/>
    </div>
  )
}

export default App;
