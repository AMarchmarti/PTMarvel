
import { Character } from '../../../domain/models/Character';
import { createMarvelImg } from '../../../utils/createMarvelImg';
import SelectFavorites from '../../Favorites/SelectFavorites/SelectFavorites';
import './CharacterListItem.css'
import { useNavigate } from 'react-router-dom';


interface CharacterItemProps {
   character: Character;
}


const CharacterItem = ({ character}: CharacterItemProps) => {

    const navigate = useNavigate()

    const handleSelectedCharacter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(`/character/${character.id}`)
    }

    return (
        <div className="character-item" onClick={(e) => handleSelectedCharacter(e)}>
            <img className='character-item__image' src={createMarvelImg({path: character.thumbnail.path, extension: character.thumbnail.extension})} alt={character.name} />

            <div className='character-item__title'>
                <hr />
                <div className='character-item__title--inner'>
                    <p>{character.name}</p>
                    <SelectFavorites className='character-item__title--inner--icon' character={character} />
                </div>
            </div>
        </div>
    )
}

export default CharacterItem