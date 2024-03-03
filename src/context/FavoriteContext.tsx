import React, { createContext, useState, useEffect } from 'react';


interface Favorite {
    id: string;
    name: string;
}

interface FavoritesContextType {
    favorites: Favorite[];
    toggleFavorite: (favorite: Favorite) => void;
    isFavorite: (id: string) => boolean;
}


const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    toggleFavorite: () => { },
    isFavorite: () => false,
});

const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [favorites, setFavorites] = useState<Favorite[]>([]);

    const isFavorite = (id: string) => {
        return favorites.some((f) => f.id === id);
    };

    const toggleFavorite = (favorite: Favorite) => {
       

        if (isFavorite(favorite.id)) {
            const updatedFavorites = favorites.filter((f) => f.id !== favorite.id);
            setFavorites(updatedFavorites);
        } else {
            setFavorites([...favorites, favorite]);
        }
    };


    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesProvider, FavoritesContext };
