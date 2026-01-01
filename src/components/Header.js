import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStat = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_IMG}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStat ? "Online ✅" : "Offline 🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button
                        className="login-btn"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login")
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )

}
export default Header;