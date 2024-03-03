import { useContext, useState } from "react"
import HeartIconSelected from "../Icons/HeartIconSelected"
import { FavoritesContext } from "../../context/FavoriteContext"
import HeartIconUnselected from "../Icons/HeartIconUnselected"


const SelectFavorites = ({ className, id, name }: { className?: string, id: number, name:string }) => {
    const { toggleFavorite, isFavorite } = useContext(FavoritesContext)
    const [selected, setSelected] = useState(isFavorite(id.toString()))
    const handleSeleceted = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('id', id)
        e.stopPropagation()
        setSelected(!selected)
        toggleFavorite({ id: id.toString(), name: name })
    }
    console.log('selected', { id, selected })
    return <div onClick={handleSeleceted}>
        {selected ? <HeartIconSelected className={className} /> : <HeartIconUnselected />}
    </div>
}
export default SelectFavorites;
