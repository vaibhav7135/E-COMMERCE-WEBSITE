import React from "react";
import "./Navbar.css";
import Cart from "./Cart";
import ContactUs from "./ContactUs"
import About from "./AboutUs"
import Services from "./Services";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate  } from "react-router-dom";



function Navbar({size,setShow,cart}) {

  
const navigate = useNavigate();

    const handleContactUsClick = () => {
        navigate("/ContactUs"); 
      };
      const handleCartClick =()=>{
        navigate("/Cart");
      };
      const handleHomeClick = () =>{
        navigate("/");
      };
      const handleAboutClick=()=>{
        navigate("/AboutUs")
      };
      const handleServicesClick=()=>{
        navigate("/Services")
      };
      const handleLoginClick=()=>{
        navigate("/Login")
      };
      const handleSignUpClick=()=>{
        navigate("/SignUp")
      };
    return (
        <>

            <div className="navbar">

                <div className="menu">
                    <ul>

                        <h3 id="logo">TechShop</h3>

                        <li onClick={handleHomeClick}>Home</li>
                        <li onClick={handleAboutClick}>About</li>
                        <li onClick={handleContactUsClick}>Contact</li>
                        <li onClick={handleServicesClick}>Services</li>

                        <li onClick={handleCartClick}  className="cartic">Cart</li>
                        <span>{size}</span>
                        <button  onClick={handleLoginClick}className="loginbtn">Login</button>
                        <button onClick={handleSignUpClick} className="signinbtn">Sign Up</button>
                        <input className="searchbar" type="search" placeholder="Search Anything..." />

                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;