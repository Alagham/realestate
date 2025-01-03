import React from 'react'
import "../../styles/HomePage.css"
import Button from "../../components/button.jsx"
import HomePageImg from"../../assets/homepage.svg"
import HeroImg from"../../assets/HeroImg.svg"
import Dreamhome from"../../assets/dreamhomeImg.svg"
import PropertiesImg from"../../assets/propertiesImg.svg"
import ManagementImg from"../../assets/managementImg.svg"
import InformationImg from"../../assets/informationimg.svg"
const HomePage = () => {

    const handleClick = () => {
        alert('Button clicked!');
      };
  return (
    <div className='container'>
        <div className='Hero-container'>
            <div className='Hero-content'>
                <a href="Explore More">Explore More</a>
                <h2>Discover Your Dream Property With SoftKey </h2>
                <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                <div className='btns'>
                    <Button 
                    label="Explore More" 
                    onClick={handleClick} 
                    className="Explore-btn"
                    />

                    <Button
                    label="Browse Properties" 
                    onClick={handleClick} 
                    className="Browse-btn"
                    />
                </div>
                <div className='review-section'>
                    
                    <div className='review-one'>
                        <h2>200K+</h2>
                        <p>Happy Customers</p>
                    </div>
                    <div className='review-two'>
                        <h2>16K+</h2>
                        <p>Properties for clients</p>
                    </div>
                    <div className='review-three'>
                        <h2>10K+</h2>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='Hero-img' src={HeroImg} alt="" />
            </div>
            <div>
                <img className='Homepage-img' src={HomePageImg} alt="" />
            </div>
        </div>
        <div className='searchIcon'>
            <div className='dreamhome'>
                <img src={Dreamhome} alt="" />
                <p>Find Your Dream Home</p>
            </div>
            <div className='properties'>
                <img src={PropertiesImg} alt="properties" />
                <p>Unlock Property Value</p>
            </div>
            <div className='managements'>
                <img src={ManagementImg} alt="" />
                <p>Effortless Property Management</p>
            </div>
            <div className='information'>
                <img src={InformationImg} alt="" />
                <p>Smart Investments, Informed Decisions</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage