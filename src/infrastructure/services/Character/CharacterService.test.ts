import { vi } from "vitest";

import { concatApiKey } from "../../utils/concatApiKey";
import { get } from "../../utils/HttpsService";

import { CharacterService } from "./CharacterService";

import type { Mock } from "vitest";

vi.mock("../../utils/HttpsService");

describe("CharacterService", () => {
	let characterService: CharacterService;

	beforeEach(() => {
		characterService = new CharacterService();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	describe("getAllCharacters", () => {
		let expectedUrl: string;
		beforeEach(() => {
			expectedUrl = concatApiKey(
				new URL(
					`${
						import.meta.env.VITE_BASE_URL
					}/characters?limit=50&offset=0`,
				),
			);
		});
		it("should return an array of characters", async () => {
			const characters = [
				{ id: "1", name: "Character 1" },
				{ id: "2", name: "Character 2" },
			];

			(get as Mock).mockResolvedValueOnce({
				data: { results: characters },
			});

			const result = await characterService.getAllCharacters();

			expect(get).toHaveBeenCalledWith({ path: expectedUrl });
			expect(result).toEqual(characters);
		});

		it("should return an empty array when no characters are found", async () => {
			(get as Mock).mockResolvedValueOnce({ data: { results: [] } });

			const result = await characterService.getAllCharacters();

			expect(get).toHaveBeenCalledWith({ path: expectedUrl });
			expect(result).toEqual([]);
		});

		it("should return an array of characters with applied filter", async () => {
			const filter = { name: "Spider-Man" };
			const characters = [{ id: "1", name: "Spider-Man" }];
			const expectedUrlWithName = new URL(
				`${
					import.meta.env.VITE_BASE_URL
				}/characters?limit=50&offset=0&name=Spider-Man`,
			);

			(get as Mock).mockResolvedValueOnce({
				data: { results: characters },
			});

			const result = await characterService.getAllCharacters(filter);

			expect(get).toHaveBeenCalledWith({
				path: concatApiKey(expectedUrlWithName),
			});
			expect(result).toEqual(characters);
		});
	});

	describe("getCharacterById", () => {
		it("should return a character by ID", async () => {
			const characterId = "1";
			const character = { id: characterId, name: "Character 1" };
			const expectedUrl = new URL(
				`${import.meta.env.VITE_BASE_URL}/characters/${characterId}`,
			);

			(get as Mock).mockResolvedValueOnce({
				data: { results: [character] },
			});

			const result = await characterService.getCharacterById(characterId);

			expect(get).toHaveBeenCalledWith({
				path: concatApiKey(expectedUrl),
			});
			expect(result).toEqual(character);
		});
	});

	describe("getComicByCharacterId", () => {
		let expectedUrl: string;
		beforeEach(() => {
			expectedUrl = concatApiKey(
				new URL(
					`${
						import.meta.env.VITE_BASE_URL
					}/characters/1/comics?limit=20&offset=0&orderBy=onsaleDate`,
				),
			);
		});

		it("should return an array of comics by character ID", async () => {
			const characterId = "1";
			const comics = [
				{ id: "1", title: "Comic 1" },
				{ id: "2", title: "Comic 2" },
			];

			(get as Mock).mockResolvedValueOnce({
				data: { results: comics },
			});

			const result = await characterService.getComicByCharacterId(
				characterId,
			);

			expect(get).toHaveBeenCalledWith({ path: expectedUrl });
			expect(result).toEqual(comics);
		});

		it("should return an empty array when no comics are found", async () => {
			const characterId = "1";

			(get as Mock).mockResolvedValueOnce({ data: { results: [] } });

			const result = await characterService.getComicByCharacterId(
				characterId,
			);

			expect(get).toHaveBeenCalledWith({ path: expectedUrl });
			expect(result).toEqual([]);
		});
	});
});
