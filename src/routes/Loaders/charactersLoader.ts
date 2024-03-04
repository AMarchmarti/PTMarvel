import { defer } from "react-router-dom";

import { GetAllCharacters } from "../../domain/usecases/Character/GetAllCharacters";
import { CharacterService } from "../../infrastructure/services/Character/CharacterService";

const characterService = new CharacterService();
const getAllCharacters = new GetAllCharacters(characterService);

const charactersLoader = async ({ request }: { request: Request }) => {
	const url = new URL(request.url);
	const search = url.searchParams.get("nameStartsWith") || "";

	const characterPromise = getAllCharacters.execute({
		nameStartsWith: search,
	});

	return defer({ data: characterPromise, search: search });
};

export default charactersLoader;
