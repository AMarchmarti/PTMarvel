import { Character } from "../../models/Character";
import { CharacterRepository } from "../../repositories/CharacterRepository";

export class SearchCharactersByName {
  constructor(private characterRepository: CharacterRepository) {}

  execute(name: string): Promise<Character[]> {
    return this.characterRepository.searchCharactersByName(name);
  }
}
