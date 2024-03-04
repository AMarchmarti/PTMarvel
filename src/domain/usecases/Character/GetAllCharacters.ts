import type { Character, CharacterFilter } from "../../models/Character";
import type { CharacterRepository } from "../../repositories/CharacterRepository";

export class GetAllCharacters {
  constructor(private characterRepository: CharacterRepository) {}

  execute(filter?: CharacterFilter): Promise<Character[]> {
    return this.characterRepository.getAllCharacters(filter);
  }
}
