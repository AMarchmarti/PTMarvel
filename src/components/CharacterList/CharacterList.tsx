
import React from 'react';
import { Character } from '../../domain/models/Character';
import CharacterItem from './CharacterListItem/CharacterListItem';

import './CharacterList.css';
import { createMarvelImg } from '../../utils/createMarvelImg';


interface CharacterListProps {
    characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className='character-list'>
            {characters.map((character, index) => (
                <CharacterItem key={index} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;
