// Carousel.tsx
import React, { useRef, useState } from 'react';
import './Caroussel.css';
import ComicCard from '../ComicCard/ComicCard';
import { createMarvelImg } from '../../utils/createMarvelImg';
import { Comic } from '../../domain/models/Comic';


interface CarouselProps {
    comics: Comic[];

}


const Carousel: React.FC<CarouselProps> = ({ comics }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        setScrollLeft(target.scrollLeft);
    };


    return (
        <div className="carousel-container">
            <div
                className="carousel"
                ref={carouselRef}
                onScroll={handleScroll}
                draggable
            >
                {comics && comics.map((comic: Comic, index: number) => (
                    <ComicCard key={index} imageUrl={createMarvelImg({ path: comic.thumbnail.path, extension: comic.thumbnail.extension })} name={comic.title} />
                ))}
            </div>
            <div className="scrollbar" style={{ left: scrollLeft }}></div>
        </div>
    );
};

export default Carousel;
