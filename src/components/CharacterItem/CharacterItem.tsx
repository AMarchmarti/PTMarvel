import { useState } from 'react';
import './CharacterItem.css'
import HeartIconSelected from '../Icons/HeartIconSelected';
import HeartIconUnselected from '../Icons/HeartIconUnselected';

interface CharacterItemProps {
    name: string;
    image: string;
    id: number
}


const CharacterItem = ({ name, image, id }: CharacterItemProps) => {
    const [selected, setSelected] = useState(false)
    const handleSeleceted = () => {
        setSelected(!selected)
    }
    // const handleNavigate = () => { 

    // }

    return (
        <div className="character-item">
            <img className='character-item__image' src={image} alt={name} />

            <div className='character-item__title'>
                <hr />
                <div className='character-item__title--inner'>
                    <p>{name}</p>
                    <div onClick={handleSeleceted}>
                        {selected ? <HeartIconSelected className='character-item__title--inner--icon' /> : <HeartIconUnselected />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem