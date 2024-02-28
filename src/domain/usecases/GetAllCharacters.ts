import { Character } from "../models/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";

export class GetAllCharacters {
  constructor(private characterRepository: CharacterRepository) {}

  execute(): Promise<Character[]> {
    return this.characterRepository.getAllCharacters();
  }
}
