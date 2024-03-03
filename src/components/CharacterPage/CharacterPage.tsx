import { Await, useLoaderData } from "react-router-dom";

import { Suspense } from "react";

import Carousel from "../Caroussel/Caroussel";
import ComicCard from "../ComicCard/ComicCard";
import SelectFavorites from "../SelectFavorites/SelectFavorites";



const CharacterPage = () => {
    const { data } = useLoaderData() as { data: any };

    return (
        <Suspense fallback={<div></div>}>
            <Await resolve={Promise.all([data.characterPromise, data.comicsPromise]).then((value) => value)} >
                {(data) => <div>
                    <div>
                        <div>
                            <img />
                            <div>
                                <div>
                                    <h1>{data[0].name}</h1>
                                    <SelectFavorites id={data[0].id} name={data[0].name} />
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2></h2>
                        <Carousel data={data[1]} Card={ComicCard} />
                    </div>
                </div>
                }
            </Await>
        </Suspense>
    );
}

export default CharacterPage;