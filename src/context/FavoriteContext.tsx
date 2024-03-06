import React, { createContext, useState, useEffect } from "react";

import type { Character } from "../domain/models/Character";

interface FavoritesContextType {
	favorites: Character[];
	toggleFavorite: (favorite: Character) => void;
	isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType>({
	favorites: [],
	toggleFavorite: () => {},
	isFavorite: () => false,
});

const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [favorites, setFavorites] = useState<Character[]>([]);

	const isFavorite = (id: string) => {
		return favorites.some((f: Character) => f.id.toString() === id);
	};

	const toggleFavorite = (favorite: Character) => {
		let newFavorites = [];
		if (isFavorite(favorite.id.toString())) {
			newFavorites = favorites.filter((f) => f.id !== favorite.id);
		} else {
			newFavorites = [...favorites, favorite];
		}
		setFavorites(newFavorites);
		localStorage.setItem("favorites", JSON.stringify(newFavorites));
	};

	useEffect(() => {
		const storedFavorites = localStorage.getItem("favorites");
		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites));
		}
	}, []);

	return (
		<FavoritesContext.Provider
			value={{ favorites, toggleFavorite, isFavorite }}
		>
			{children}
		</FavoritesContext.Provider>
	);
};

export { FavoritesProvider, FavoritesContext };
