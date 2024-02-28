import { Character } from "../models/Character";

export interface CharacterRepository {
  getAllCharacters: () => Promise<Character[]>;
  searchCharactersByName: (name: string) => Promise<Character[]>;
}
