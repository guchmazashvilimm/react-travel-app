import React from "react";
import "./HeroStyle.css";
import img from "../assets/travel1.jpg";
import Destination from "./Destination";
function Hero(props) {

    return (
        <>
        <div className={props.cName}>

            <img alt="HeroImg" src={props.img}/>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.btntext}</a>            
            </div>
            

        </div>



        </>
    )
}

export default Hero;