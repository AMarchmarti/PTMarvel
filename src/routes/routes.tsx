import Layout from "../components/Layout/Layout";
import CharacterDetailPage from "../components/pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../components/pages/CharacterListpage/CharacterListPage";
import FavoriteCharactersPage from "../components/pages/FavoritePage/FavoriteCharactersPage";

import characterLoader from "./Loaders/characterLoader";
import charactersLoader from "./Loaders/charactersLoader";

import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <CharacterListPage />,
				loader: charactersLoader,
			},
			{
				path: "/favorites",
				element: <FavoriteCharactersPage />,
			},
			{
				path: "/character/:id",
				element: <CharacterDetailPage />,
				loader: characterLoader,
			},
		],
	},
];
