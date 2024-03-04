import { render, screen } from "@testing-library/react";

import CharacterDetail from "./CharacterDetail";

import type { Character } from "../../domain/models/Character";
import type { Comic } from "../../domain/models/Comic";


describe("CharacterDetail", () => {

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
    const mockCharacter: Character = {
        id: 1,
        name: "Iron Man",
        description: "Genius, billionaire, playboy, philanthropist",
        thumbnail: { path: "path1", extension: "jpg" },
    };


    it("renders the character details correctly", () => {
        render(<CharacterDetail character={mockCharacter} comics={mockComics} />);

        const characterName = screen.getByText("Iron Man");
        const characterDescription = screen.getByText("Genius, billionaire, playboy, philanthropist");
        const comicTitles = screen.getAllByTestId("comic-title");

        expect(characterName).toBeInTheDocument();
        expect(characterDescription).toBeInTheDocument();
        expect(comicTitles).toHaveLength(mockComics.length);
    });

    it("renders the correct number of comics", () => {
        render(<CharacterDetail character={mockCharacter} comics={mockComics} />);

        const comicCards = screen.getAllByTestId("comic-card");

        expect(comicCards).toHaveLength(mockComics.length);
    });
});