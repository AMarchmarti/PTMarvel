/* eslint-disable no-shadow */
export type ExtensionT = "gif" | "jpg";
export enum URLType {
	Comiclink = "comiclink",
	Detail = "detail",
	Wiki = "wiki",
}
export interface URL {
	type: URLType;
	url: string;
}

export enum ItemType {
	Cover = "cover",
	Empty = "",
	InteriorStory = "interiorStory",
}
export interface TextObject {
	type: string;
	language: string;
	text: string;
}
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

export interface Thumbnail {
	path: string;
	extension: ExtensionT;
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
