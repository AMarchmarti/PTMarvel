import { defer } from "react-router-dom";

import { GetCharacterById } from "../../domain/usecases/Character/GetCharacterbyId";
import { GetComicByCharacterId } from "../../domain/usecases/Character/GetComicByCharacterId";
import { CharacterService } from "../../infrastructure/services/Character/CharacterService";

import type { Params } from "react-router-dom";

const characterService = new CharacterService();
const getCharacterById = new GetCharacterById(characterService);
const getComicByCharacterId = new GetComicByCharacterId(characterService);

const characterLoader = async ({ params }: { params: Params }) => {
	const characterPromise = getCharacterById.execute(params.id as string);
	const comicsPromise = getComicByCharacterId.execute(params.id as string);
	return defer({ data: { characterPromise, comicsPromise } });
};

export default characterLoader;
