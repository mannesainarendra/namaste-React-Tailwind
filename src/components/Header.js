import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [logButton, setLogButton] = useState("Login");
    const [btnClassName, setBtnClassName] = useState("px-5 h-10 border-black bg-blue-300 rounded-xl");

    const handleLogButton = () => {
        if (logButton === "Login") {
            setLogButton("Logout");
            setBtnClassName("px-5 h-10 border-black bg-red-300 rounded-xl");
        } else{
            setLogButton("Login");
            setBtnClassName("px-5 h-10 border-black bg-blue-300 rounded-xl");
        }
    }

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between align-middle bg-pink-100 shadow-lg">
            <img className="w-32 h-24 bg-pink-100" src={LOGO_URL}/>
            <div className="flex items-center">
                <ul className="flex m-5 gap-5 items-center font-bold text-lg">
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className={btnClassName} onClick={handleLogButton}>{logButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
