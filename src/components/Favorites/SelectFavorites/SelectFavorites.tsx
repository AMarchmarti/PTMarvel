import { useContext, useState } from "react";

import { FavoritesContext } from "../../../context/FavoriteContext";
import GlobalIcon from "../../Icons/GlobalIcon";

import type { Character } from "../../../domain/models/Character";
import type { IconSizeT } from "../../Icons/IconProps.interface";
import "./SelectFavorites.css";

interface SelectFavoritesProps {
	className?: string;
	character: Character;
	size?: IconSizeT;
}

const SelectFavorites = ({
	className,
	character,
	size,
}: SelectFavoritesProps) => {
	const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
	const [selected, setSelected] = useState(
		isFavorite(character.id.toString()),
	);

	const handleSeleceted = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.stopPropagation();
		setSelected(!selected);
		toggleFavorite(character);
	};

	return (
		<button
			onClick={handleSeleceted}
			data-testid="select-favorites"
			aria-label="Add&Delete Favorites"
		>
			{selected ? (
				<GlobalIcon
					iconName="HeartIconSelected"
					className={className}
					size={size}
				/>
			) : (
				<GlobalIcon iconName="HeartIconUnselected" size={size} />
			)}
		</button>
	);
};
export default SelectFavorites;
