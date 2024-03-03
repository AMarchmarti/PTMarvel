import { Comic } from "../../models/Comic";
import { CharacterRepository } from "../../repositories/CharacterRepository";

export class GetComicByCharacterId {
  constructor(private characterRepository: CharacterRepository) {}

  execute(id: string): Promise<Comic[]> {
    return this.characterRepository.getComicByCharacterId(id);
  }
}
