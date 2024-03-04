import { Suspense, useContext } from "react";
import { Await, useLoaderData, useLocation, useSubmit } from "react-router-dom";

import { FavoritesContext } from "../../context/FavoriteContext";
import { useFilter } from "../../hooks/useFilter";
import CharacterList from "../CharacterList/CharacterList";
import SearchInput from "../SearchInput/SearchInput";
import SkeletonCards from "../SkeletonCards/SkeletonCards";

import type { Character } from "../../domain/models/Character";

const CharacterListPage = () => {
    const { data, search } = useLoaderData() as {
        data: Character[];
        search: string;
    };

    const { favorites } = useContext(FavoritesContext)

    const location = useLocation();

    const filter = useFilter({
        initialValue: search,
        onChange: handleSearch,
    });

    const submit = useSubmit();
    function handleSearch(value: string) {
        const isFirstSearch = value === null;
        if (!!filter.ref && !!filter.ref.current) {
            submit(filter.ref.current?.form, {
                replace: !isFirstSearch,
            });
        }
    }
    return (
        <>
            <main
            >
                <SearchInput
                    inputRef={filter.ref}
                    initialValue={filter.input}
                    handleSearch={filter.handleChange}
                />
                {location.pathname !== "/favorites" ? <Suspense fallback={<SkeletonCards />}>
                    <Await resolve={data}>
                        {(characters: Character[]) => {
                            return (
                                <>
                                    {characters.length !== 0 && <p style={{ fontSize: 12, textTransform: "uppercase" }}>{characters.length} results</p>}
                                    <CharacterList characters={characters} />
                                </>
                            )
                        }}
                    </Await>
                </Suspense> : <>
                    <p style={{ fontSize: 12, textTransform: "uppercase" }}>{favorites.length} results</p>
                    <CharacterList characters={favorites} />
                </>}
            </main>
        </>
    );
};

export default CharacterListPage;
