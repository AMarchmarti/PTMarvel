import React from "react";
import "./SkeletonCards.css";

interface SkeletonCardsProps {
    length?: number;

}

const SkeletonCards: React.FC<SkeletonCardsProps> = ({ length = 50 }) => {
    const skeletonCards = Array.from({ length: length }, (_, index) => (
        <div key={index} className="skeleton-card-item">
            <div className="image-placeholder"></div>
            <div className="text-placeholder"></div>
        </div>
    ));

    return <div className="skeleton-card">{skeletonCards}</div>;
};

export default SkeletonCards;
