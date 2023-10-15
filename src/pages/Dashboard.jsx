import React from "react";
import './Dashboard.css'
import Offer from "../components/offers";
import Destination from "../components/destination";
import Explore from "../components/explore";

import PosterPics from "../Images/image-16.jpeg"


function Dashboard() {
    return ( 
    <div className="dashboard-container">
       <div className="top-navbar-box">
            <div className="top-navbar">
                <div className="search-box">
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{fill:"#cfd4dc"}}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></span>
                        <input type="text"  className="search-input" placeholder="Search by any things..."/>
                </div>
                <div className="notification-box">
                    <div className="date-box">
                        Saturday, may 3, 2023
                    </div>
                    <div className="notification-div">
                        <span className="notification-number">3</span>
                        <span className="notification-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg></span>

                    </div>
                </div>
            </div>


            <div className="top-picture-bar">

                    <div className="top-poster-picture">
                        <img src={PosterPics} alt="" className="Images" />
                    </div>  
                <div className="form-div">
        

                    <div className="shot-form-bar">
                        <div className="form-box">
                            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{fill:"#cfd4dc"}}> <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></span>
                            <select name="" id="" className="form-select">
                                <option value= "1">Where Are You Going?</option>
                                <option value= "11">Where Are You Going?</option>
                                <option value= "111">Where Are You Going?</option>
                            </select>
                        </div>
                        <div className="divider"></div>
                        <div className="form-box">
                            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" style={{fill:"#cfd4dc"}}> <path d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zm94 144.3v42.5H162.1V197h180.3zm0 79.8v42.5H162.1v-42.5h180.3z"/></svg></span>
                            <select name="" id="" className="form-select">
                                <option value= "1">Check-in Date</option>
                                <option value= "11">Check-in Date</option>
                                <option value= "111">Check-in Date</option>
                            </select>
                        </div>
                        <div className="divider"></div>
                        <div className="form-box ">
                            <span>  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}> <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></span>
                            <select name="" id="" className="form-select select-2">
                                <option value= "1">3 adults</option>
                                <option value= "11">3 adults</option>
                                <option value= "111">3 adults</option>
                            </select>
                        </div>
                        <div className="search-button">
                            Search
                        </div>
                    </div>

                    </div>

            </div>
       </div>

       <div className="product-box">
            <div className="title-box">
                <span className="product-title">Trending destinations</span>
                <div className="next-navigator">
                    <span className="next-btn"><svg xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></span>
                    <span className="next-btn btn-picked"> <svg xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 320 512" style={{fill:"#fff"}}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span>
                </div>

            </div>

            <div className="inserted-component">
            <Destination/>
            <div className="carousel-btn-box">
                <div className="carousel-btn"></div>
                <div className="carousel-btn-two"></div>
                <div className="carousel-btn"></div>
            </div>
            </div>

            <div className="title-box">
                <span className="product-title">Best Offers</span>
                <div className="next-navigator">
                  <span className="view-all-btn">View All</span>
                </div>

            </div>

            <div className="inserted-component">
                <Offer/>
            </div>
            <div className="title-box">
                <span className="product-title">Explore France</span>
                <div className="next-navigator">
                    <span className="view-all-btn">View All</span>
                </div>

            </div>
            <div className="inserted-component">
                <Explore/>
            </div>
       </div>
    </div>
     );
}

export default Dashboard;