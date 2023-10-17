import {
	faAngleRight,
	faEnvelope,
	faGear,
	faHeart,
	faHouse,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Menu = () => {
	const [activeMenuItem, setActiveMenuItem] = useState(null);

	const handleMouseEnter = (index) => {
		setActiveMenuItem(index);
	};

	const handleMouseLeave = () => {
		setActiveMenuItem(null);
	};

	return (
		<div className="menu">
			<div className="nav-menu">
				<div
					className="menu-card"
					onMouseEnter={() => handleMouseEnter(0)}
					onMouseLeave={handleMouseLeave}
				>
					{activeMenuItem === 0 && <div className="dot" />}
					<FontAwesomeIcon icon={faHouse} />
					<p>Dashboard</p>
				</div>
				<div
					className="menu-card"
					onMouseEnter={() => handleMouseEnter(1)}
					onMouseLeave={handleMouseLeave}
				>
					{activeMenuItem === 1 && <div className="dot" />}
					<FontAwesomeIcon icon={faLocationDot} />
					<p>Explore City</p>
				</div>
				<div
					className="menu-card"
					onMouseEnter={() => handleMouseEnter(2)}
					onMouseLeave={handleMouseLeave}
				>
					{activeMenuItem === 2 && <div className="dot" />}
					<FontAwesomeIcon icon={faEnvelope} />
					<p>Ticket</p>
				</div>
				<div
					className="menu-card"
					onMouseEnter={() => handleMouseEnter(3)}
					onMouseLeave={handleMouseLeave}
				>
					{activeMenuItem === 3 && <div className="dot" />}
					<FontAwesomeIcon icon={faHeart} />
					<p>Favorites</p>
				</div>
				<div
					className="menu-card"
					onMouseEnter={() => handleMouseEnter(4)}
					onMouseLeave={handleMouseLeave}
				>
					{activeMenuItem === 4 && <div className="dot" />}
					<FontAwesomeIcon icon={faGear} />
					<p>Setting</p>
				</div>
			</div>

			<div
				className="menu-card"
				id="signout-icon"
				onMouseEnter={() => handleMouseEnter(5)}
				onMouseLeave={handleMouseLeave}
			>
				{activeMenuItem === 5 && <div className="dot" />}
				<FontAwesomeIcon icon={faAngleRight} className="signout-icon"/>
				<p>Logout</p>
			</div>
		</div>
	);
};

export default Menu;
