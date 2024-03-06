import { createMarvelImg } from "../../../utils/createMarvelImg";
import SelectFavorites from "../../Favorites/SelectFavorites/SelectFavorites";

import type { Character } from "../../../domain/models/Character";

import "./CharacterListItem.css";

interface CharacterItemProps {
	character: Character;
	handleClick?: (id: string | number) => void;
}

const CharacterItem = ({ character, handleClick }: CharacterItemProps) => {
	return (
		<div
			className="character-item"
			onClick={() => handleClick && handleClick(character.id)}
			data-testid="character-item"
		>
			<img
				className="character-item__image"
				src={createMarvelImg({
					path: character.thumbnail.path,
					extension: character.thumbnail.extension,
				})}
				alt={character.name}
			/>

			<div className="character-item__title">
				<hr />
				<div className="character-item__title--inner">
					<p>{character.name}</p>
					<SelectFavorites
						className="character-item__title--inner--icon"
						character={character}
					/>
				</div>
			</div>
		</div>
	);
};

export default CharacterItem;
