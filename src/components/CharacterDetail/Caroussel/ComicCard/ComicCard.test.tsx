import { render, screen } from "@testing-library/react";

import ComicCard from "./ComicCard";

describe("ComicCard", () => {

	it("should createRoot the comic card with the correct image, name, and year", () => {
		const mockImageUrl = "https://example.com/image.jpg";
		const mockName = "Comic 1";
		const mockYear = "2022";

		render(
			<ComicCard
				imageUrl={mockImageUrl}
				name={mockName}
				year={mockYear}
				handleClick={() => { }}
			/>,
		);

		const comicImage = screen.getByAltText("comic-card__Comic 1");
		const comicName = screen.getByText("Comic 1");
		const comicYear = screen.getByText("2022");

		expect(comicImage).toBeInTheDocument();
		expect(comicName).toBeInTheDocument();
		expect(comicYear).toBeInTheDocument();
	});


	it("should render the comic card without a year", () => {
		const mockImageUrl = "https://example.com/image.jpg";
		const mockName = "Comic 1";

		render(
			<ComicCard
				imageUrl={mockImageUrl}
				name={mockName}
				handleClick={() => { }}
			/>,
		);

		const comicImage = screen.getByAltText("comic-card__Comic 1");
		const comicName = screen.getByText("Comic 1");
		const comicYear = screen.queryByText("2022");

		expect(comicImage).toBeInTheDocument();
		expect(comicName).toBeInTheDocument();
		expect(comicYear).not.toBeInTheDocument();
	});


	it("should render the comic card without a handleClick function", () => {
		const mockImageUrl = "https://example.com/image.jpg";
		const mockName = "Comic 1";
		const mockYear = "2022";

		render(
			<ComicCard
				imageUrl={mockImageUrl}
				name={mockName}
				year={mockYear}
			/>,
		);

		const comicImage = screen.getByAltText("comic-card__Comic 1");
		const comicName = screen.getByText("Comic 1");
		const comicYear = screen.getByText("2022");

		expect(comicImage).toBeInTheDocument();
		expect(comicName).toBeInTheDocument();
		expect(comicYear).toBeInTheDocument();
	});
});
