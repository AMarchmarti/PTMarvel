
import React from 'react';
import './ComicCard.css';

interface ComicCardProps {
    imageUrl: string;
    name: string;
    year: string;
}

const ComicCard: React.FC<ComicCardProps> = ({ imageUrl, name, year }) => {
    return (
        <div className="comic-card">
            <img src={imageUrl} alt={`comic-card__${name}`} />
            <p>{name}</p>
            <span>{year}</span>
        </div>
    );
};

export default ComicCard;
