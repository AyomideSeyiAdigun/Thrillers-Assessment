import React from "react";
import './destination.css'

import imageOne from "../Images/image-12.jpeg"
import imageTwo from "../Images/image-15.jpeg"
import imageThree from "../Images/image-4.jpeg"


function Destination() {
    return ( 
        <div className="multiple-container">

    
        <div className="destination-container">
            <div className="d-left-side">
            <img src={imageOne} alt="" className="Images" />
            </div>
            <div className="d-right-side">
             <div className="d-name-rating-box">
                <div className="d-title">
                    Montmartre France
                </div>

                <div className="d-rating-box">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill:"#dfa338"}}>  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>
                    <span className="d-rating">5/5</span>
                </div>
             </div>
             <div className="d-description-box">
                Visiting the best tourist center chosen by the audience
             </div>
             <div className="d-title d-price">
                $450,000,00
             </div>
            </div>
        </div>

        <div className="destination-container">
            <div className="d-left-side">
            <img src={imageTwo} alt="" className="Images" />
            </div>
            <div className="d-right-side">
             <div className="d-name-rating-box">
                <div className="d-title">
                    Montmartre France
                </div>

                <div className="d-rating-box">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill:"#dfa338"}}>  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>
                    <span className="d-rating">5/5</span>
                </div>
             </div>
             <div className="d-description-box">
                Visiting the best tourist center chosen by the audience
             </div>
             <div className="d-title d-price">
                $450,000,00
             </div>
            </div>
        </div>

        <div className="destination-container">
            <div className="d-left-side">
            <img src={imageThree} alt="" className="Images" />
            </div>
            <div className="d-right-side">
             <div className="d-name-rating-box">
                <div className="d-title">
                    Montmartre France
                </div>

                <div className="d-rating-box">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill:"#dfa338"}}>  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>
                    <span className="d-rating">5/5</span>
                </div>
             </div>
             <div className="d-description-box">
                Visiting the best tourist center chosen by the audience
             </div>
             <div className="d-title d-price">
                $450,000,00
             </div>
            </div>
        </div>
        </div>
     );
}

export default Destination;