import { RouteObject } from "react-router-dom";
import homeLoader from "./Loaders/homeLoader";
import characterLoader from "./Loaders/characterLoader";

import CharacterListPage from "../components/pages/CharacterListPage";
import CharacterDetailPage from "../components/pages/CharacterDetailPage";

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
    element: <CharacterListPage />,
    loader: characterLoader,
  },
];
