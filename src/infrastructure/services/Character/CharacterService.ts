import { LIMIT_CHARACTERS, LIMIT_COMICS } from "../../../constants/Global";
import { Character, CharacterFilter } from "../../../domain/models/Character";
import { Comic } from "../../../domain/models/Comic";
import { CharacterRepository } from "../../../domain/repositories/CharacterRepository";
import { get } from "../../utils/HttpsService";
import { appendFilter } from "../../utils/appendFilter";

import { concatApiKey } from "../../utils/concatApiKey";

export class CharacterService implements CharacterRepository {
  private readonly API_URL: string | undefined = `${
    import.meta.env.VITE_BASE_URL
  }`;

  async getAllCharacters(filter?: CharacterFilter): Promise<Character[]> {
    const url = new URL(`${this.API_URL}/characters`);
    url.searchParams.append("limit", LIMIT_CHARACTERS.toString());
    url.searchParams.append("offset", "0");

    const urlWithFilter = appendFilter({ url, filter: filter || {} });
    const characters = await get({ path: concatApiKey(urlWithFilter) });

    return characters.data.results;
  }

  async getCharacterById(id: string): Promise<Character> {
    const url = new URL(`${this.API_URL}/characters/${id}`);
    const character = await get({ path: concatApiKey(url) });
    return character.data.results[0];
  }

  async getComicByCharacterId(id: string): Promise<Comic[]> {
    const url = new URL(`${this.API_URL}/characters/${id}/comics`);
    url.searchParams.append("limit", LIMIT_COMICS.toString());
    url.searchParams.append("offset", "0");
    const comics = await get({ path: concatApiKey(url) });
    return comics.data.results;
  }
}
