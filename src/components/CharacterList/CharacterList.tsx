
import React from 'react';
import { Character } from '../../domain/models/Character';
import CharacterItem from '../CharacterItem/CharacterItem';

import './CharacterList.css';


interface CharacterListProps {
    characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className='character-list'>
            {characters.map(character => (
                <CharacterItem id={character.id} name={character.name} image={character.thumbnail.path + "." + character.thumbnail.extension} />
            ))}
        </div>
    );
};

export default CharacterList;
