import type { Character, CharacterFilter } from "../models/Character";
import type { Comic } from "../models/Comic";

export interface CharacterRepository {
	getAllCharacters: (filter?: CharacterFilter) => Promise<Character[]>;
	getCharacterById: (id: string) => Promise<Character>;
	getComicByCharacterId: (id: string) => Promise<Comic[]>;
}
