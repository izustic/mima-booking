import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeart, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BestOfferData } from "./BestOfferData";

const BestOffers = () => {
	const formatPrice = (price) => {
		return price.toLocaleString(undefined, {
			maximumFractionDigits: 2,
		});
	};
	return (
		<div className="trending">
			<div className="trending-header">
				<p>Best Offers</p>
				<div>
					<p style={{ fontSize: "15px", cursor: "pointer" }}>View All</p>
				</div>
			</div>
			<div className="best-cards">
				{BestOfferData.map((data) => (
					<div className="best-card">
						<div className="best-img">
							<img src={data.image} alt="best_image" />
						</div>
						<div className="best-details">
							<h3>{data.offering}</h3>
							<div className="best-mid">
								<FontAwesomeIcon icon={faLocationDot} />
								<p>{data.city} / {data.country}</p>
							</div>
							<div className="best-bottom">
								<p className="price">${formatPrice(data.price)} <span> / night</span></p> 
								<FontAwesomeIcon icon={faHeart} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BestOffers;
