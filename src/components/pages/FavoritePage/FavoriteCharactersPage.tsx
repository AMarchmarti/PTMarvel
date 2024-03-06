import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FavoritesContext } from "../../../context/FavoriteContext";
import CharacterList from "../../CharacterList/CharacterList";

const FavoriteCharactersPage = () => {
	const { favorites } = useContext(FavoritesContext);
	const navigate = useNavigate();
	return (
		<main>
			<CharacterList characters={favorites} navigate={navigate} />
		</main>
	);
};

export default FavoriteCharactersPage;
