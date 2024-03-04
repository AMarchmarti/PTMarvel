

import "./CharacterDetail.css"

import { createMarvelImg } from "../../utils/createMarvelImg";
import SelectFavorites from "../Favorites/SelectFavorites/SelectFavorites";

import Carousel from "./Caroussel/Caroussel";

import type { Character } from "../../domain/models/Character";
import type { Comic } from "../../domain/models/Comic";

interface CharacterDetailProps {
    character: Character
    comics: Comic[];
}
const CharacterDetail = ({ character, comics }: CharacterDetailProps) => {
    return (
        <div>
            <div className="character--page__title">
                <div className="character--page__resume">
                    <img className="character--page__img" src={createMarvelImg({ path: character.thumbnail.path, extension: character.thumbnail.extension })} alt={character.name} />
                    <div className="character--page__info">
                        <div className="character--page__info__title">
                            <h1>{character.name}</h1>
                            <SelectFavorites character={character} size="XS" />
                        </div>
                        <p>{character.description}</p>
                    </div>
                </div>
            </div>
            <div className="character--page__comics">
                <h2>Comics</h2>
                {comics.length ?
                    <Carousel comics={comics} />
                    : <h2>No Results</h2>}
            </div>
        </div >

    );
}

export default CharacterDetail;