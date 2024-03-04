import { useContext } from "react"

import { FavoritesContext } from "../../context/FavoriteContext"
import CharacterList from "../CharacterList/CharacterList"


const FavoriteCharactersPage = () => {
    const { favorites } = useContext(FavoritesContext)
    return <main>
        <CharacterList characters={favorites} />
    </main>
}

export default FavoriteCharactersPage;