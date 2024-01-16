import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "../routes/Home";
import { useState } from "react";
import { menuItems } from "./menuItems";
import SignUp from "../routes/SignUp";


const Navbar = () =>{
    const [toggleClass, setToggleClass] = useState(false);
    const [MenuClass, setMenuClass] = useState(false);

    const toggleHandler = () =>{
        if (toggleClass == true){
            setToggleClass(false);
        }
        if (toggleClass == false){
            setToggleClass(true);
        }
        if (MenuClass == true){
            setMenuClass(false);
        }
        if (MenuClass == false){
            setMenuClass(true);
        }
    };
    

    return (
        <>
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><a href={menuItems[0].url}>Trippy</a></h1>
            <div className="menu-icons">
                <i className={toggleClass ?'fas fa-times' : 'fas fa-bars'} onClick={toggleHandler}></i>
                
            </div>
            <ul className={MenuClass ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((el,index) =>{
                    return (<li className={el.cName} key={index}>
                        <Link to={el.url}><i className={el.icon}></i>{el.title}</Link>
                    </li>)
                })}
                <button className="signup-btn"><a href={menuItems[4].url}>Sign up</a></button>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;
