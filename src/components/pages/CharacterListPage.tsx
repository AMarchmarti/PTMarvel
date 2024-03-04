
import React, { Suspense } from "react";
import { Await, useLoaderData, useSubmit } from "react-router-dom";

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
    };

    return (
        <>

            <div style={{ maxWidth: 1512, display: "flex", flexDirection: "column", padding: "48px 0px", gap: "24px", margin: "auto" }}>
                <SearchInput inputRef={filter.ref} initialValue={filter.input} handleSearch={filter.handleChange} />
                <Suspense fallback={<SkeletonCards />}>
                    <Await resolve={data} >
                        {(characters: Character[]) => <>
                            <CharacterList characters={characters} />
                        </>
                        }
                    </Await>
                </Suspense>
            </div>
        </>
    );
};

export default CharacterListPage;
