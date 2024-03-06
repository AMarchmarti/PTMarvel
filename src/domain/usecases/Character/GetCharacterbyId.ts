import type { Character } from "../../models/Character";
import type { CharacterRepository } from "../../repositories/CharacterRepository";

export class GetCharacterById {
	constructor(private characterRepository: CharacterRepository) {}

	execute(id: string): Promise<Character> {
		return this.characterRepository.getCharacterById(id);
	}
}
