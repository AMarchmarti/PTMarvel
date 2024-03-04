import { render, screen } from "@testing-library/react";

import ComicCard from "./ComicCard";

describe("ComicCard", () => {
    const mockImageUrl = "https://example.com/image.jpg";
    const mockName = "Comic 1";
    const mockYear = "2022";

    it("renders the comic card correctly", () => {
        render(<ComicCard imageUrl={mockImageUrl} name={mockName} year={mockYear} handleClick={() => { }} />);

        const comicImage = screen.getByAltText("comic-card__Comic 1");
        const comicName = screen.getByText("Comic 1");
        const comicYear = screen.getByText("2022");

        expect(comicImage).toBeInTheDocument();
        expect(comicName).toBeInTheDocument();
        expect(comicYear).toBeInTheDocument();
    });

    it("calls the handleClick function when dragged", () => {
        const handleClickMock = jest.fn();
        render(<ComicCard imageUrl={mockImageUrl} name={mockName} year={mockYear} handleClick={handleClickMock} />);

        const comicCard = screen.getByTestId("comic-card");
        comicCard.dispatchEvent(new Event("drag"));

        expect(handleClickMock).toHaveBeenCalled();
    });
});