// Carousel.tsx
import React, { useRef, useState } from 'react';
// import './Carousel.css';


interface CarouselProps {
    data: any[];
    Card: React.FC<any>;
}


const Carousel: React.FC<CarouselProps> = ({ data, Card }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    console.log('data', data)

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
                {data?.map((dataProps: any, index: number) => (
                    <Card key={index} {...dataProps} />
                ))}
            </div>
            <div className="scrollbar" style={{ left: scrollLeft }}></div>
        </div>
    );
};

export default Carousel;
