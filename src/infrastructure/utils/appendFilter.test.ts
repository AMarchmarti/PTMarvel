import { appendFilter } from "./appendFilter";

describe("appendFilter", () => {
	it("should append filter parameters to the URL", () => {
		const url = new URL("https://example.com");
		const filter = { name: "Spider-Man", age: 30 };

		const result = appendFilter({ url, filter });

		expect(result.searchParams.get("name")).toBe("Spider-Man");
		expect(result.searchParams.get("age")).toBe("30");
	});

	it("should not append null or undefined filter parameters to the URL", () => {
		const url = new URL("https://example.com");
		const filter = { name: null, age: undefined };

		const result = appendFilter({ url, filter });

		expect(result.searchParams.get("name")).toBeNull();
		expect(result.searchParams.get("age")).toBeNull();
	});

	it("should not append empty string filter parameters to the URL", () => {
		const url = new URL("https://example.com");
		const filter = { name: "" };

		const result = appendFilter({ url, filter });

		expect(result.searchParams.get("name")).toBeNull();
	});

});
