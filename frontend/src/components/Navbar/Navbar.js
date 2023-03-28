import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../../components/Button/button";
import Search from "../../images/whitesearch.png";
import React, { useState } from "react";

const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const active_user = localStorage.getItem("user_id");
	const handleClick = () => {
		window.location.href = "/login";
		localStorage.clear();
	};

	const handleRoute = (route) => {
		return active_user ? route : "/reg";
	};
	return (
		<div className="navbar">
			<div className="logo">
				<span>Py</span>thonic
			</div>
			<div className="links">
				<Link to="/home" className="linking">
					Home
				</Link>
				<Link to="/editor" className="linking">
					Code Editor
				</Link>
				<Link to={handleRoute("/SavedCode")} className="linking">
					Codes
				</Link>
				<Link to={handleRoute("/messages")} className="linking">
					Chat
				</Link>

				<a href={handleRoute("/search")}>
					<img className="search-icon" src={Search} alt="search icon" />
				</a>

				<Button id="logout" className="linking" onClick={handleClick}>
					{localStorage.getItem("user_id") ? "Log Out" : "Log in"}
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
