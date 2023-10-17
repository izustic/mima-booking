import {
	faAngleLeft,
	faAngleRight,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TrendingData } from './TrendingData'

const Trending = () => {
  const formatPrice = (price) => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
	return (
		<div className="trending">
			<div className="trending-header">
				<p>Trending Destination</p>
				<div>
					<FontAwesomeIcon icon={faAngleLeft} />
					<FontAwesomeIcon icon={faAngleRight} />
				</div>
			</div>
			<div className="trending-cards">
        {TrendingData.map((data => (
				<div className="trending-card">
					<div className="trending-img">
						<img
							src={data.image}
							alt="trending_image"
						/>
					</div>
					<div className="trending-details">
						<div className="trending-city">
							<h3>{data.name}</h3>
							<div>
								<FontAwesomeIcon icon={faStar} />
								<p>{data.rating}/5</p>
							</div>
						</div>
						<p>{data.description}</p>
						<p className="price">${formatPrice(data.price)}</p>
					</div>
				</div>
        )))}
			</div>
			<div className="trend-pagination">
        <div className="dott"></div>
        <div className="dott active" />
        <div className="dott" />
      </div>
		</div>
	);
};

export default Trending;
