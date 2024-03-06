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
		<li
			className="comic-card"
			onClick={
				handleClick as unknown as React.MouseEventHandler<HTMLLIElement>
			}
			ref={cardRef as unknown as React.RefObject<HTMLLIElement>}
			data-testid="comic-card"
		>
			<img src={imageUrl} alt={`comic-card__${name}`} />
			<p>{name}</p>
			<span>{year}</span>
		</li>
	);
};

export default ComicCard;
