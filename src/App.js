import "./App.css";
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Course from "./components/Course";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
<div>
   <Header />
      <div className="routex">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/course" element={<Course />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
