import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Profile = () => {
	return (
		<div className="profile">
			<h2>
				Mima<span style={{ color: "#696969" }}>Booking</span>
			</h2>
			<div className="img-wrap">
				<div className="img-hold">
					<div className="img">
						<img
							src="https://source.unsplash.com/random/?woman_profile"
							alt="lady_picture"
						/>
					</div>
					<div className="edit-icon">
						<FontAwesomeIcon icon={faPenToSquare} />
					</div>
				</div>
				<p>ilia jan</p>
			</div>
		</div>
	);
};

export default Profile;
