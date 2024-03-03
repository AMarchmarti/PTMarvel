import { Await, useLoaderData } from "react-router-dom";

import { Suspense, lazy } from "react";

import { Character } from "../../domain/models/Character";
import { Comic } from "../../domain/models/Comic";

const CharacterDetail = lazy(() => import("../CharacterDetail/CharacterDetail"))



const CharacterDetailPage = () => {
    const { data } = useLoaderData() as { data: { characterPromise: Promise<Character>, comicsPromise: Promise<Comic[]> } };

    return (
    
        <Suspense fallback={<div></div>}>
            <Await resolve={Promise.all([data.characterPromise, data.comicsPromise]).then((value) => value)} >
                {(data: [Character, Comic[]]) => 
                    <CharacterDetail character={data[0]} comics={data[1]} />
                }
                </Await>
        </Suspense>
    );
}

export default CharacterDetailPage;