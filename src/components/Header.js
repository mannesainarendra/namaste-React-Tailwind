import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className={btnClassName} onClick={handleLogButton}>{logButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;