
import React from 'react';
import './ComicCard.css';

interface ComicCardProps {
    imageUrl: string;
    name: string;
    year?: string;
    handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ComicCard: React.FC<ComicCardProps> = ({ imageUrl, name, year, handleClick }) => {
    return (
        <div className="comic-card" onDrag={handleClick}>
            <img src={imageUrl} alt={`comic-card__${name}`} />
            <p>{name}</p>
            <span>{year}</span>
        </div>
    );
};

export default ComicCard;
