import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavBar = () => {
	return (
		<div className="nav-bar">
			<div className="search">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<input type="text" placeholder="Search any thing ..." />
			</div>
			<div className="nav-info">
				<p>
					Saturday, may 3, 2023 <span>3</span>
				</p>
				<FontAwesomeIcon icon={faBell} />
			</div>
		</div>
	);
};

export default NavBar;
