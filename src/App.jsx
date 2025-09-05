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


const App = () => {
  return (
    <div>
      <Header/>
      <NavBar />
      
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
      </Routes>

       <Footer/>
    </div>
  )
}

export default App;
