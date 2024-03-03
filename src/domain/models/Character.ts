import { Stories, Thumbnail } from "./Base";


export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}


export interface CharacterFilter {
  name?: string | null;
  orderBy?: string;
  comics?: string;
  series?: string;
  nameStartsWith?: string | null;
  modifiedSince?: string;
  events?: string;
  stories?: string;
}
