import { Stories, TextObject, Thumbnail } from "./Base";

export interface Comic {
  id: string | number;
  digitalId?: string | number;
  title: string;
  issueNumber?: string | number;
  variantDescription?: string;
  description?: string;
  modified?: string;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: string;
  textObjects?: TextObject[];
  resourceURI?: string;
  urls?: URL[];
  series?: Series;
  variants?: Series[];
  collections?: Series[];
  collectedIssues?: Series[];
  dates?: DateElement[];
  prices?: Price[];
  thumbnail: Thumbnail;
  images?: Thumbnail[];
  creators?: Characters;
  characters?: Characters;
  stories?: Stories;
  events?: Events;
}

export interface Characters {
  available: string;
  returned: string;
  collectionURI: string;
  items: CharactersItem[];
}

export interface CharactersItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface DateElement {
  type: string;
  date: string;
}

export interface Events {
  available: string;
  returned: string;
  collectionURI: string;
  items: Series[];
}

export interface Price {
  type: string;
  price: string;
}
