import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Sections from "./components/Sections";
import Testimonials from "./components/Testimonials";
import Getstarted from "./components/Getstarted";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="md:px-60 pt-6 p-2">
      <div className="absolute opacity-0 h-60 bg-white  sm:-top-40 sm:opacity-40 sm:w-[33rem] blur-[100px] md:left-20 sm:-left-20" />
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Companies />
        <Sections/>
        <Testimonials/>
        <Getstarted/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
