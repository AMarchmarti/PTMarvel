import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest"

import { createMarvelImg } from "../../../utils/createMarvelImg";

import CharacterListItem from "./CharacterListItem";

import type { Character } from "../../../domain/models/Character";

const mockCharacter: Character = {
    id: 1,
    name: "Iron Man",
    thumbnail: { path: "path1", extension: "jpg" },
};

describe("CharacterListItem", () => {
    it("should render the character name and image correctly", () => {
        render(<CharacterListItem character={mockCharacter as Character} />);

        const characterName = screen.getByText("Iron Man");
        const characterImage = screen.getByAltText("Iron Man");

        expect(characterName).toBeInTheDocument();
        expect(characterImage).toBeInTheDocument();
        expect(characterImage).toHaveAttribute(
            "src",
            createMarvelImg({
                path: mockCharacter.thumbnail.path,
                extension: mockCharacter.thumbnail.extension,
            })
        );
    });

    it("should call the handleClick function when clicked", () => {
        const handleClick = vi.fn();
        render(
            <CharacterListItem character={mockCharacter as Character} handleClick={handleClick} />
        );

        const characterItem = screen.getByTestId("character-item");
        fireEvent.click(characterItem);

        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(handleClick).toHaveBeenCalledWith(mockCharacter.id);
    });
});