import React from "react";
import "./SkeletonCards.css";

interface SkeletonCardsProps {
	length?: number;
}

const SkeletonCards: React.FC<SkeletonCardsProps> = ({ length = 50 }) => {
	const skeletonCards = Array.from({ length: length }, (_, index) => (
		<li key={index} className="skeleton-card-item">
			<div className="image-placeholder"></div>
			<div className="text-placeholder"></div>
		</li>
	));

	return (
		<>
			<div className="text-placeholder"></div>
			<ul className="skeleton-card">{skeletonCards}</ul>;
		</>
	);
};

export default SkeletonCards;
