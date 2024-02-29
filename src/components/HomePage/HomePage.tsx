// components/HomePage.tsx
import React from 'react';

import CharacterList from '../CharacterList/CharacterList';
import HomepPageController from './HomePageController';
import SearchInput from '../SearchInput/SearchInput';




const HomePage: React.FC = () => {

    const { characters,
        searchResults,
        handleSearch } = HomepPageController();

    return (
        <>
            <h1>Personajes de Marvel</h1>
            <div style={{ maxWidth: 1512, display: 'flex', flexDirection: "column", padding: '48px 0px', gap: "24px", margin: 'auto' }}>
                <SearchInput handleSearch={handleSearch} />

                <CharacterList characters={searchResults.length ? searchResults : characters} />
            </div>
        </>
    );
};

export default HomePage;
