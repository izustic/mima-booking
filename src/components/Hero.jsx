import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
	faAngleDown,
	faListCheck,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-img">
				<img
					src="https://source.unsplash.com/random/?luxury_furniture"
					alt="hero_image"
				/>
			</div>
			<div className="hero-options">
				<div className="hero-card">
					<div className="hero-card-item">
						<FontAwesomeIcon icon={faLocationDot} />
						<p>Where Are You Going?</p>
					</div>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className="hero-card">
					<div className="hero-card-item">
						<FontAwesomeIcon icon={faListCheck} />
						<p>Check-in Date</p>
					</div>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className="hero-card">
					<div className="hero-card-item">
						<FontAwesomeIcon icon={faUser} />
						<p>3 adults</p>
					</div>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<button>Search</button>
			</div>
		</div>
	);
};

export default Hero;
