import { useContext, useState } from 'react';
import './CharacterItem.css'
import HeartIconSelected from '../Icons/HeartIconSelected';
import HeartIconUnselected from '../Icons/HeartIconUnselected';
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoriteContext';
import SelectFavorites from '../SelectFavorites/SelectFavorites';

interface CharacterItemProps {
    name: string;
    image: string;
    id: number
}


const CharacterItem = ({ name, image, id }: CharacterItemProps) => {

    const navigate = useNavigate()

    const handleSelectedCharacter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(`/character/${id}`)
    }

    return (
        <div className="character-item" onClick={(e) => handleSelectedCharacter(e)}>
            <img className='character-item__image' src={image} alt={name} />

            <div className='character-item__title'>
                <hr />
                <div className='character-item__title--inner'>
                    <p>{name}</p>
                    <SelectFavorites className='character-item__title--inner--icon' id={id} name={name} />
                </div>
            </div>
        </div>
    )
}

export default CharacterItem