import React from "react";
import "./ComicCard.css";

interface ComicCardProps {
	cardRef?: React.RefObject<HTMLDivElement>;
	imageUrl: string;
	name: string;
	year?: string;
	handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ComicCard: React.FC<ComicCardProps> = ({
	imageUrl,
	cardRef,
	name,
	year,
	handleClick,
}: ComicCardProps) => {
	return (
		<div
			className="comic-card"
			onClick={handleClick}
			ref={cardRef}
			data-testid="comic-card"
		>
			<img src={imageUrl} alt={`comic-card__${name}`} />
			<p>{name}</p>
			<span>{year}</span>
		</div>
	);
};

export default ComicCard;
