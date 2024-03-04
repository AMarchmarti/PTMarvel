
import React from "react";

import CharacterItem from "./CharacterListItem/CharacterListItem";

import type { Character } from "../../domain/models/Character";


import "./CharacterList.css";


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
