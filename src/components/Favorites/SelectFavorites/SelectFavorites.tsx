import { useContext, useState } from "react";

import { FavoritesContext } from "../../../context/FavoriteContext";
import GlobalIcon from "../../Icons/GlobalIcon";

import type { Character } from "../../../domain/models/Character";
import type { IconSizeT } from "../../Icons/IconProps.interface";

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
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		e.stopPropagation();
		setSelected(!selected);
		toggleFavorite(character);
	};

	return (
		<div onClick={handleSeleceted} data-testid="select-favorites">
			{selected ? (
				<GlobalIcon
					iconName="HeartIconSelected"
					className={className}
					size={size}
				/>
			) : (
				<GlobalIcon iconName="HeartIconUnselected" size={size} />
			)}
		</div>
	);
};
export default SelectFavorites;
