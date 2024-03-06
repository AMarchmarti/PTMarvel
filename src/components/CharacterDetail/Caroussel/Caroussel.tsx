// Carousel.tsx
import React, { useRef, useState } from "react";

import "./Caroussel.css";

import { createMarvelImg } from "../../../utils/createMarvelImg";

import ComicCard from "./ComicCard/ComicCard";

import type { Comic } from "../../../domain/models/Comic";

interface CarouselProps {
	comics: Comic[];
}

const Carousel = ({ comics }: CarouselProps) => {
	const [scrollLeft, setScrollLeft] = useState(0);

	const carouselRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const target = event.target as HTMLDivElement;
		setScrollLeft(target.scrollLeft);
	};

	const handleCardClick = (index: number) => {
		setScrollLeft(index);
	};

	const handleCarouselClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const carouselWidth: number = carouselRef.current!.offsetWidth;
		const cardWidth: number = cardRef.current!.offsetWidth;
		const numCards: number = Math.floor(carouselWidth / cardWidth);

		const clickedIndex: number = Math.floor(
			(e.clientX - carouselRef.current!.getBoundingClientRect().left) /
				cardWidth,
		);

		if (clickedIndex >= 0 && clickedIndex <= numCards - 1) {
			setScrollLeft(clickedIndex);
		}
	};

	return (
		<div
			data-testid="carousel"
			className="carousel-container"
			ref={carouselRef}
			onClick={handleCarouselClick}
			onScroll={handleScroll}
		>
			<div className="carousel">
				{comics.length &&
					comics.map((comic: Comic, index: number) => (
						<ComicCard
							cardRef={cardRef}
							key={index}
							imageUrl={createMarvelImg({
								path: comic.thumbnail.path,
								extension: comic.thumbnail.extension,
							})}
							name={comic.title}
							handleClick={() => handleCardClick(index)}
						/>
					))}
			</div>
			<div className="scrollbar" style={{ left: scrollLeft }}></div>
		</div>
	);
};

export default Carousel;
