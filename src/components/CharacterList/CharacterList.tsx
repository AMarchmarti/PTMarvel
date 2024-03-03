
import React from 'react';
import { Character } from '../../domain/models/Character';
import CharacterItem from '../CharacterItem/CharacterItem';

import './CharacterList.css';
import { createMarvelImg } from '../../utils/createMarvelImg';


interface CharacterListProps {
    characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className='character-list'>
            {characters.map((character, index) => (
                <CharacterItem key={index} id={character.id} name={character.name} image={createMarvelImg({path: character.thumbnail.path, extension: character.thumbnail.extension})} />
            ))}
        </div>
    );
};

export default CharacterList;
