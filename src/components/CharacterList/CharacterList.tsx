import React from "react";

import CharacterItem from "./CharacterListItem/CharacterListItem";

import type { Character } from "../../domain/models/Character";
import "./CharacterList.css";
import type { useNavigate } from "react-router-dom";

interface CharacterListProps {
	characters: Character[];
	navigate: ReturnType<typeof useNavigate>;
}

const CharacterList: React.FC<CharacterListProps> = ({
	characters,
	navigate,
}) => {
	const handleSelectedCharacter = (id: string | number) => {
		navigate(`/character/${id}`);
	};
	return (
		<div className="character-list">
			{characters.map((character, index) => (
				<CharacterItem
					key={index}
					character={character}
					handleClick={handleSelectedCharacter}
				/>
			))}
		</div>
	);
};

export default CharacterList;
