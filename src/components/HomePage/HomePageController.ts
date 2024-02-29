import { useEffect, useState } from "react";

import { Character } from "../../domain/models/Character";
import { CharacterService } from "../../infrastructure/services/Character/CharacterService";
import { GetAllCharacters } from "../../domain/usecases/Character/GetAllCharacters";
import { SearchCharactersByName } from "../../domain/usecases/Character/SearchCharacterByName";

const characterService = new CharacterService();
const getAllCharacters = new GetAllCharacters(characterService);
const searchCharactersByName = new SearchCharactersByName(characterService);

const HomepPageController = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchResults, setSearchResults] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    try {
      const characters = await getAllCharacters.execute();
      setCharacters(characters);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleSearch = async (query: string) => {
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      try {
        const results = await searchCharactersByName.execute(query);
        setSearchResults(results);
      } catch (error) {}
    }
  };

  return {
    characters,
    searchResults,
    handleSearch,
  };
};

export default HomepPageController;
