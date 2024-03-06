import { concatApiKey } from "./concatApiKey";

describe("concatApiKey", () => {
	it("should append the API key to the URL", () => {
		const url = new URL("https://example.com");
		const expectedUrl = `https://example.com/?apikey=${
			import.meta.env.VITE_API_KEY
		}`;

		const result = concatApiKey(url);

		expect(result).toEqual(expectedUrl);
	});
});
