// components/HomePage.tsx
import React from 'react';

import CharacterList from '../CharacterList/CharacterList';
import HomepPageController from './HomePageController';




const HomePage: React.FC = () => {

    const { characters,
        searchResults,
        query,
        handleSearch } = HomepPageController();

    return (
        <div>
            <h1>Personajes de Marvel</h1>
            <input type="text" placeholder="Buscar personaje" value={query} onChange={(e) => handleSearch(e.target.value)} />
            <CharacterList characters={query.trim() === '' ? characters : searchResults} />
        </div>
    );
};

export default HomePage;
