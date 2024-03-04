import { Suspense, useContext } from "react";
import { Await, useLoaderData, useLocation, useNavigate, useSubmit } from "react-router-dom";

import { FavoritesContext } from "../../../context/FavoriteContext";
import { useFilter } from "../../../hooks/useFilter";
import CharacterList from "../../CharacterList/CharacterList";
import SearchInput from "../../SearchInput/SearchInput";
import SkeletonCards from "../../SkeletonCards/SkeletonCards";

import type { Character } from "../../../domain/models/Character";

const CharacterListPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const submit = useSubmit();
    const { favorites } = useContext(FavoritesContext)
    const { data, search } = useLoaderData() as {
        data: Character[];
        search: string;
    };

    function handleSearch(value: string) {
        const isFirstSearch = value === null;
        if (!!filter.ref && !!filter.ref.current) {
            submit(filter.ref.current?.form, {
                replace: !isFirstSearch,
            });
        }
    }

    const filter = useFilter({
        initialValue: search,
        onChange: handleSearch,
    });


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
                                    <CharacterList characters={characters} navigate={navigate} />
                                </>
                            )
                        }}
                    </Await>
                </Suspense> : <>
                    <p style={{ fontSize: 12, textTransform: "uppercase" }}>{favorites.length} results</p>
                    <CharacterList characters={favorites} navigate={navigate} />
                </>}
            </main>
        </>
    );
};

export default CharacterListPage;
