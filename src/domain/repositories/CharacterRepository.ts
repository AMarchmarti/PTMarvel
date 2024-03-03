import { Character, CharacterFilter } from "../models/Character";

export interface CharacterRepository {
  getAllCharacters: (filter?: CharacterFilter) => Promise<Character[]>;
  getCharacterById: (id: string) => Promise<Character>;
}
