import { useContext, useState } from "react"
import { FavoritesContext } from "../../context/FavoriteContext"
import { IconSizeT } from "../Icons/IconProps.interface";
import GlobalIcon from "../Icons/GlobalIcon";

interface SelectFavoritesProps {
    className?: string;
    id: number;
    name: string;
    size?: IconSizeT;
}

const SelectFavorites = ({ className, id, name, size }: SelectFavoritesProps) => {
    const { toggleFavorite, isFavorite } = useContext(FavoritesContext)
    const [selected, setSelected] = useState(isFavorite(id.toString()))

    const handleSeleceted = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setSelected(!selected)
        toggleFavorite({ id: id.toString(), name: name })
    }

    return <div onClick={handleSeleceted}>
        {selected ? <GlobalIcon iconName="HeartIconSelected" className={className} size={size} /> : <GlobalIcon iconName="HeartIconUnselected" size={size} />}
    </div>
}
export default SelectFavorites;
