import React from "react";
import TrollFace from "../images/troll-face.jpg";

export default function Navbar(){
    return(
        <nav className="navbar">
            
            <img src={TrollFace} alt="Troll Face" className="navbar--logo"/>
            <h2 className="name"> Meme Generator</h2>
            <p className="course--details">React Course - Project 3</p>
    
        </nav>
    )
}