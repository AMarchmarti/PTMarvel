import { defer, Params } from 'react-router-dom';
import { CharacterService } from '../../infrastructure/services/Character/CharacterService';
import { GetCharacterById } from '../../domain/usecases/Character/GetCharacterbyId';

const characterService = new CharacterService();
const getCharacterById = new GetCharacterById(characterService);

const characterLoader = async ({ params }: {params: Params}) => { 
    const character = await getCharacterById.execute(params.id as string);
    return defer({ character });
}

export default characterLoader;