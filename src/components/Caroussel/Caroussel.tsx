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
    console.log('comics', comics)
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        setScrollLeft(target.scrollLeft);
    };

    const handleDragStart = (event: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        const startX = ('touches' in event ? (event as unknown as TouchEvent).touches[0].clientX : event.clientX) || 0;
        let scrollLeftStart = carouselRef.current?.scrollLeft || 0;

        const handleDragMove = (moveEvent: MouseEvent | TouchEvent) => {
            const currentX = 'clientX' in moveEvent ? moveEvent.clientX : (moveEvent as TouchEvent).touches[0].clientX;
            const distance = currentX - startX;
            carouselRef.current!.scrollLeft = scrollLeftStart - distance;
        };

        const handleDragEnd = () => {
            document.removeEventListener('mousemove', handleDragMove);
            document.removeEventListener('touchmove', handleDragMove);
            document.removeEventListener('mouseup', handleDragEnd);
            document.removeEventListener('touchend', handleDragEnd);
        };

        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('touchmove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        document.addEventListener('touchend', handleDragEnd);
    };

    return (
        <div className="carousel-container">
            <div
                className="carousel"
                ref={carouselRef}
                onScroll={handleScroll}
                onDragStart={handleDragStart}
                onTouchStart={handleDragStart as React.TouchEventHandler<HTMLDivElement>}
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
