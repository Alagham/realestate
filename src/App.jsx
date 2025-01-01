import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./static/header.jsx"
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage.jsx';
import Properties from './pages/Properties/Properties.jsx';
import Services from './pages/Services/Services.jsx';

function App() {
  return (
    <>
        <Header className="main-header"/>
        <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/services" element={<Services />} />
        </Routes>
        </Router>
    </>
  );
}


export default App
