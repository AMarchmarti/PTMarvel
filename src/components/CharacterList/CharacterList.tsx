
import React from 'react';
import { Character } from '../../domain/models/Character';


interface CharacterListProps {
    characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div>
            {characters.map(character => (
                <div key={character.id}>
                    <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
                    <p>{character.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
