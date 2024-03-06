import { render, screen } from "@testing-library/react";

import Carousel from "./Caroussel";

import type { Comic } from "../../../domain/models/Comic";

describe("Carousel", () => {
	const mockComics: Comic[] = [
		{
			id: 1,
			title: "Comic 1",
			digitalId: 123,
			issueNumber: 1,
			variantDescription: "Variant 1",
			description: "Description 1",
			thumbnail: { path: "path1", extension: "jpg" },
		},
		{
			id: 2,
			title: "Comic 2",
			digitalId: 456,
			issueNumber: 2,
			variantDescription: "Variant 2",
			description: "Description 2",
			thumbnail: { path: "path2", extension: "jpg" },
		},
		{
			id: 3,
			title: "Comic 3",
			digitalId: 789,
			issueNumber: 3,
			variantDescription: "Variant 3",
			description: "Description 3",
			thumbnail: { path: "path3", extension: "jpg" },
		},
	];

	it("should render the carousel with correct number of comics", () => {
		render(<Carousel comics={mockComics} />);

		const carousel = screen.getByTestId("carousel");
		const comicCards = screen.getAllByTestId("comic-card");

		expect(carousel).toBeInTheDocument();
		expect(comicCards).toHaveLength(mockComics.length);
	});

	it("should render the carousel with correct number of comics", () => {
		render(<Carousel comics={mockComics} />);

		const carousel = screen.getByTestId("carousel");
		const comicCards = screen.getAllByTestId("comic-card");

		expect(carousel).toBeInTheDocument();
		expect(comicCards).toHaveLength(mockComics.length);
	});

	it("should render the carousel with no comics", () => {
		render(<Carousel comics={[]} />);

		const carousel = screen.getByTestId("carousel");
		const comicCards = screen.queryAllByTestId("comic-card");

		expect(carousel).not.toBeNull();
		expect(carousel).toBeInTheDocument();
		expect(comicCards).toHaveLength(0);
	});

	it("should render the carousel with one comic", () => {
		const mockComic: Comic[] = [
			{
				id: 1,
				title: "Comic 1",
				digitalId: 123,
				issueNumber: 1,
				variantDescription: "Variant 1",
				description: "Description 1",
				thumbnail: { path: "path1", extension: "jpg" },
			},
		];

		render(<Carousel comics={mockComic} />);

		const carousel = screen.getByTestId("carousel");
		const comicCards = screen.getAllByTestId("comic-card");

		expect(carousel).toBeInTheDocument();
		expect(comicCards).toHaveLength(1);
	});
});
