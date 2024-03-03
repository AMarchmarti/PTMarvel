export interface Response<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data<T>;
}

export interface Data<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}

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

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}

export interface URL {
  type: URLType;
  url: string;
}

export enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
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
