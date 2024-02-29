import { LIMIT_CHARACTERS } from "../../../constants/Global";
import { Character, Response } from "../../../domain/models/Character";
import { CharacterRepository } from "../../../domain/repositories/CharacterRepository";
import { get } from "../../utils/HttpsService";
import { concatApiKey } from "../../utils/concatApiKey";

export class CharacterService implements CharacterRepository {
  private readonly API_URL: string | undefined = `${
    import.meta.env.VITE_BASE_URL
  }`;

  async getAllCharacters(): Promise<Character[]> {
    let characters: Character[] = [];
    try {
      const response: Response<Character> = await get({
        path: concatApiKey(
          `${this.API_URL}/characters?limit=${LIMIT_CHARACTERS}&offset=0`
        ),
      });
      characters = response.data.results;
    } catch (error) {}
    return characters;
  }

  async searchCharactersByName(name: string): Promise<Character[]> {
    return get({
      path: concatApiKey(`${this.API_URL}/characters?name=${name}`),
    });
  }
}
