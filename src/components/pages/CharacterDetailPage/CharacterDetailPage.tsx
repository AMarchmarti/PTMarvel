import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";


import CharacterDetail from "../../CharacterDetail/CharacterDetail";
import Loader from "../../Loader/Loader";

import type { Character } from "../../../domain/models/Character";
import type { Comic } from "../../../domain/models/Comic";

const CharacterDetailPage = () => {
    const { data } = useLoaderData() as { data: { characterPromise: Promise<Character>, comicsPromise: Promise<Comic[]> } };

    return (


        <Suspense fallback={<Loader />} data-testid="suspense-element">
            <Await resolve={Promise.all([data.characterPromise, data.comicsPromise]).then((value) => value)} >
                {(value: [Character, Comic[]]) =>
                    <CharacterDetail character={value[0]} comics={value[1]} />
                }
            </Await>
        </Suspense>

    );
}

export default CharacterDetailPage;