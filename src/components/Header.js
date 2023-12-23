import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
const Header = () =>{
    const [logButton, setLogButton] = useState("Login");
    const [btnClassName, setBtnClassName] = useState("login-Btn");

    const handleLogButton = () => {
        if (logButton === "Login") {
            setLogButton("Logout");
            setBtnClassName("logout-Btn");
        } else{
            setLogButton("Login");
            setBtnClassName("login-Btn");
        }
    }

    return (
        <div className="header">
            <img className="logo" src={LOGO_URL}/>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className={btnClassName} onClick={handleLogButton}>{logButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;