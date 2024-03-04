import { useContext } from "react"

import { FavoritesContext } from "../../context/FavoriteContext"
import CharacterList from "../CharacterList/CharacterList"


const FavoriteCharactersPage = () => {
    const { favorites } = useContext(FavoritesContext)
    return <CharacterList characters={favorites} />
}

export default FavoriteCharactersPage;