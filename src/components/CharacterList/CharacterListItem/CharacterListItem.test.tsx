import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

import CharacterItem from "./CharacterListItem";

import type { Character } from "../../../domain/models/Character";


jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));

describe("CharacterItem", () => {
    const mockCharacter: Character = {
        id: 1,
        name: "Iron Man",
        thumbnail: { path: "path1", extension: "jpg" },
    };

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    });

    it("navigates to the correct character detail page when clicked", () => {
        render(<CharacterItem character={mockCharacter} />);

        const characterItem = screen.getByTestId("character-item");
        fireEvent.click(characterItem);

        expect(useNavigate).toHaveBeenCalledWith(`/character/${mockCharacter.id}`);
    });

    it("renders the character name correctly", () => {
        render(<CharacterItem character={mockCharacter} />);

        const characterName = screen.getByText(mockCharacter.name);

        expect(characterName).toBeInTheDocument();
    });

    // Add more tests for other parts of the component if needed
});