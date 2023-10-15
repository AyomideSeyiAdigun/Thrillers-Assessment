import React from "react";
import './Home.css'
import SideNavBar from "./components/side-nav";
import Dashboard from "./pages/Dashboard";

function Home() {
    return ( 
        <div className="home-box-container">
           <div className="left-side">
            <SideNavBar/>
           </div>
           <div className="right-side">
            <Dashboard/>
           </div>
        </div>
     );
}

export default Home;