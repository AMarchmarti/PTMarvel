import CharacterDetailPage from "../components/pages/CharacterDetailPage";
import CharacterListPage from "../components/pages/CharacterListPage";
import FavoriteCharactersPage from "../components/pages/FavoriteCharactersPage";

import characterLoader from "./Loaders/characterLoader";
import homeLoader from "./Loaders/homeLoader";

import type { RouteObject } from "react-router-dom";



export const routes: RouteObject[] = [
  {
    path: "/",
    element: <CharacterListPage />,
    loader: homeLoader,
  },
  {
    path: "/character/:id",
    element: <CharacterDetailPage />,
    loader: characterLoader,
  },
  {
    path: "/favorites",
    element: <FavoriteCharactersPage />,
  },
];
