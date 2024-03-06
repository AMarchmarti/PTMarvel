import type { Comic } from "../../models/Comic";
import type { CharacterRepository } from "../../repositories/CharacterRepository";

export class GetComicByCharacterId {
	constructor(private characterRepository: CharacterRepository) {}

	execute(id: string): Promise<Comic[]> {
		return this.characterRepository.getComicByCharacterId(id);
	}
}
