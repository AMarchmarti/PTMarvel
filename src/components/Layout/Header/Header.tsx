import { useContext } from 'react'
import marvelLogo from '@/assets/marvel-logo.png';
import { FavoritesContext } from '../../../context/FavoriteContext';
import GlobalIcon from '../../Icons/GlobalIcon';
import { useNavigate } from 'react-router-dom';
import './Header.css';

type locationMarvelT = 'favorites' | 'home';
interface LocationMarvel {
    favorites: string;
    home: string;
}
const locationMarvel: LocationMarvel = {
    favorites: '/favorites',
    home: '/',

};


const Header = () => {
    const { favorites } = useContext(FavoritesContext)
    const navigate = useNavigate();
    const disabled = favorites.length === 0;
    const handleNavigate = (location: locationMarvelT) => {
        navigate(locationMarvel[location]);
    }

    return <header >
        <GlobalIcon className='header-logo' iconName="MarvelLogo" onClick={() => handleNavigate('home')} />
        <button className='header-favorites' onClick={() => handleNavigate('favorites')} disabled={disabled} style={{ cursor: !disabled ? 'pointer' : "not-alloed" }}>
            <GlobalIcon iconName="HeartIconSelected" size="XS" />
            {!disabled && <span className='header-favorites-count'>{favorites.length}</span>}
        </button>
    </header>
}
export default Header;