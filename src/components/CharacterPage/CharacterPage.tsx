import { Await, useLoaderData } from "react-router-dom";

import { Suspense } from "react";

import SelectFavorites from "../SelectFavorites/SelectFavorites";
import { Character } from "../../domain/models/Character";
import { Comic } from "../../domain/models/Comic";
import { createMarvelImg } from "../../utils/createMarvelImg";
import './CharacterPage.css'
import Carousel from "../Caroussel/Caroussel";


const CharacterPage = () => {
    const { data } = useLoaderData() as { data: { characterPromise: Promise<Character>, comicsPromise: Promise<Comic[]> } };

    return (
        <Suspense fallback={<div></div>}>
            <Await resolve={Promise.all([data.characterPromise, data.comicsPromise]).then((value) => value)} >
                {(data: [Character, Comic[]]) => <div>
                    <div className="character--page__title">
                        <div className="character--page__resume">
                            <img className="character--page__img" src={createMarvelImg({ path: data[0].thumbnail.path, extension: data[0].thumbnail.extension })} />
                            <div className="character--page__info">
                                <div className="character--page__info__title">
                                    <h1>{data[0].name}</h1>
                                    <SelectFavorites id={data[0].id} name={data[0].name} size="XS" />
                                </div>
                                <p>{data[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="character--page__comics">
                        <h2>Comics</h2>
                        <Carousel comics={data[1]} />
                    </div>
                </div>
                }
            </Await>
        </Suspense>
    );
}

export default CharacterPage;