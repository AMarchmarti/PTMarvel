import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";

import { FavoritesContext } from "../../../context/FavoriteContext";

import SelectFavorites from "./SelectFavorites";

import type { Character } from "../../../domain/models/Character";

describe("SelectFavorites", () => {
	it("should call toggleFavorite function when the div element is clicked and isFavorite returns true", () => {
		const character = { id: "1", name: "John Doe" };
		const toggleFavorite = vi.fn();
		const isFavorite = vi.fn().mockReturnValue(true);
		const { getByTestId } = render(
			<FavoritesContext.Provider
				value={{ favorites: [], toggleFavorite, isFavorite }}
			>
				<SelectFavorites character={character as Character} />
			</FavoritesContext.Provider>,
		);

		fireEvent.click(getByTestId("select-favorites"));

		expect(toggleFavorite).toHaveBeenCalledWith(character);
	});
	it("should not call toggleFavorite function when the div element is clicked and isFavorite returns false", () => {
		const character = { id: "1", name: "John Doe" };
		const toggleFavorite = vi.fn();
		const isFavorite = vi.fn().mockReturnValue(false);
		const { getByTestId } = render(
			<FavoritesContext.Provider
				value={{ favorites: [], toggleFavorite, isFavorite }}
			>
				<SelectFavorites character={character as Character} />
			</FavoritesContext.Provider>,
		);

		fireEvent.click(getByTestId("select-favorites"));

		expect(toggleFavorite).toHaveBeenCalled();
	});
});
