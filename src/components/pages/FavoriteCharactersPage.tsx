import { useContext } from "react"
import CharacterList from "../CharacterList/CharacterList"
import { FavoritesContext } from "../../context/FavoriteContext"


const FavoriteCharactersPage = () => {
    const { favorites } = useContext(FavoritesContext)
    return <CharacterList characters={favorites} />
}

export default FavoriteCharactersPage;