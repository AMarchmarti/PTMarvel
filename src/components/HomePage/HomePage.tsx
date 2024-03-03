
import React, { Suspense } from 'react';
import { Await, useLoaderData, useSubmit } from 'react-router-dom';

import CharacterList from '../CharacterList/CharacterList';

import { Character } from '../../domain/models/Character';
import SearchInput from '../SearchInput/SearchInput';
import { useFilter } from '../../hooks/useFilter';

const HomePage = () => {

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
        const isFirstSearch = value == null;
        if (!!filter.ref && !!filter.ref.current) {

            submit(filter.ref.current?.form, {
                replace: !isFirstSearch,
            });
        }
    };




    return (
        <>

            <SearchInput ref={filter.ref} initialValue={filter.input} handleSearch={filter.handleChange} />
            <Suspense fallback={<div></div>}>
                <Await resolve={data} >
                    {(characters: Character[]) => <>
                        <div style={{ maxWidth: 1512, display: 'flex', flexDirection: "column", padding: '48px 0px', gap: "24px", margin: 'auto' }}>

                            <CharacterList characters={characters} />
                        </div>
                    </>
                    }
                </Await>
            </Suspense>
        </>
    );
};

export default HomePage;
