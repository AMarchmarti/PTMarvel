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
		<>
			<p
				className="character-list__results"
				data-testid="character-list__results"
			>
				{characters.length} results
			</p>

			<ul className="character-list">
				{characters.map((character, index) => (
					<CharacterItem
						key={index}
						character={character}
						handleClick={handleSelectedCharacter}
					/>
				))}
			</ul>
		</>
	);
};

export default CharacterList;
