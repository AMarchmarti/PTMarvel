
import { Character } from "../../domain/models/Character";
import { CharacterRepository } from "../../domain/repositories/CharacterRepository";
import { get } from "../utils/HttpsService";



export class CharacterService implements CharacterRepository {
  private readonly API_URL: string | undefined = `${
    import.meta.env.VITE_BASE_URL
  }`;

  async getAllCharacters(): Promise<Character[]> {
    return get({path: `${this.API_URL}/characters`});
  }

  async searchCharactersByName(name: string): Promise<Character[]> {
    return get({path: `${this.API_URL}/characters?name=${encodeURIComponent(name)}`});
  }
}
