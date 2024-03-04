import { render, screen } from "@testing-library/react";

import CharacterList from "./CharacterList";

import type { Character } from "../../domain/models/Character";


describe("CharacterList", () => {
    const mockCharacters: Character[] = [
        {
            id: 1,
            name: "Iron Man",
            description: "Genius, billionaire, playboy, philanthropist",
            thumbnail: { path: "path1", extension: "jpg" },
        },
        {
            id: 2,
            name: "Captain America",
            description: "Super soldier and leader of the Avengers",
            thumbnail: { path: "path2", extension: "jpg" },
        },
    ];

    it("renders the list of characters correctly", () => {
        render(<CharacterList characters={mockCharacters} />);

        const characterItems = screen.getAllByTestId("character-item");

        expect(characterItems).toHaveLength(mockCharacters.length);
    });
});