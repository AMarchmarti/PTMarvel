import { RouteObject } from "react-router-dom";
import homeLoader from "./Loaders/homeLoader";
import characterLoader from "./Loaders/characterLoader";
import CharacterPage from "../components/CharacterPage/CharacterPage";
import HomePage from "../components/HomePage/HomePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    loader: homeLoader,
  },
  {
    path: "/character/:id",
    element: <CharacterPage />,
    loader: characterLoader,
  },
];
