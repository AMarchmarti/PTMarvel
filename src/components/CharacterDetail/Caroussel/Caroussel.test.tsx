/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-duplicates
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

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
            thumbnail: { path: "path1", extension: "jpg" }
        },
        {
            id: 2,
            title: "Comic 2",
            digitalId: 456,
            issueNumber: 2,
            variantDescription: "Variant 2",
            description: "Description 2",
            thumbnail: { path: "path2", extension: "jpg" }
        },
        {
            id: 3,
            title: "Comic 3",
            digitalId: 789,
            issueNumber: 3,
            variantDescription: "Variant 3",
            description: "Description 3",
            thumbnail: { path: "path3", extension: "jpg" }
        },
    ];

    it("renders the carousel with correct number of comics", () => {
        render(<Carousel comics={mockComics} />);

        const carousel = screen.getByTestId("carousel");
        const comicCards = screen.getAllByTestId("comic-card");

        expect(carousel).toBeInTheDocument();
        expect(comicCards).toHaveLength(mockComics.length);
    });

    it("renders the correct comic titles", () => {
        render(<Carousel comics={mockComics} />);

        const comicTitles = screen.getAllByTestId("comic-title");

        expect(comicTitles).toHaveLength(mockComics.length);
        expect(comicTitles[0]).toHaveTextContent("Comic 1");
        expect(comicTitles[1]).toHaveTextContent("Comic 2");
        expect(comicTitles[2]).toHaveTextContent("Comic 3");
    });
});