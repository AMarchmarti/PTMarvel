import { render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { vi } from "vitest";

import CharacterList from "./CharacterList";

import type { Character } from "../../domain/models/Character";
import type { Mock } from "vitest";

const mockCharacters: Character[] = [
	{
		id: 1,
		name: "Iron Man",
		thumbnail: {
			path: "",
			extension: "jpg",
		},
	},
	{
		id: 2,
		name: "Captain America",
		thumbnail: {
			path: "",
			extension: "jpg",
		},
	},
	{
		id: 3,
		name: "Thor",
		thumbnail: {
			path: "",
			extension: "jpg",
		},
	},
];

vi.mock("react-router-dom", () => ({
	useNavigate: vi.fn(),
}));

describe("CharacterList", () => {
	beforeEach(() => {
		(useNavigate as Mock).mockClear();
	});

	it("should render the list of characters correctly", () => {
		render(
			<CharacterList
				characters={mockCharacters}
				navigate={useNavigate()}
			/>,
		);

		const characterItems = screen.getAllByTestId("character-item");
		expect(characterItems).toHaveLength(mockCharacters.length);

		mockCharacters.forEach((character, index) => {
			const characterItem = characterItems[index];
			expect(characterItem).toHaveTextContent(character.name);
		});
	});

	it("should navigate to the character detail page when a character is clicked", () => {
		const navigateMock = vi.fn();
		(useNavigate as Mock).mockReturnValue(navigateMock);

		render(
			<CharacterList
				characters={mockCharacters}
				navigate={useNavigate()}
			/>,
		);

		const characterItems = screen.getAllByTestId("character-item");
		characterItems.forEach((characterItem, index) => {
			characterItem.click();
			expect(navigateMock).toHaveBeenCalledWith(
				`/character/${mockCharacters[index].id}`,
			);
		});
	});
});
