import React from "react";
import './index.css';
import { Routes, Route } from 'react-router-dom'

import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from './pages/PageNotFound';
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import ClassInfo from "./pages/ClassInfo";
import Handbook from "./pages/Handbook";
import Clothing from "./pages/Clothing";
import Schedule from "./pages/Schedule";
import Footer from "./sections/Footer";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";


function App() {
  return (
    <div>
       <ScrollToTop/>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/ClassInfo" element={<ClassInfo/>}/>
          <Route path="/Handbook" element={<Handbook/>}/>
          <Route path="/Clothing" element={<Clothing/>}/>
          <Route path="/Schedule" element={<Schedule/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Volunteer" element={<Volunteer/>}/>
          <Route path="/*" element={<PageNotFound/>} /> 
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
