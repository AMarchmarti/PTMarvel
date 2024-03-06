import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { vi } from "vitest";

import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
	it("should update debounced value after delay", () => {
		vi.useFakeTimers();
		const value = "test";
		const delay = 1000;
		const { result } = renderHook(() => useDebounce(value, delay));

		expect(result.current).toBe(value);

		act(() => {
			vi.advanceTimersByTime(delay);
		});

		expect(result.current).toBe(value);

		vi.useRealTimers();
	});

	it("should set debounced value as undefined when input value is undefined", () => {
		vi.useFakeTimers();
		const value = undefined;
		const delay = 1000;
		const { result } = renderHook(() => useDebounce(value, delay));

		expect(result.current).toBeUndefined();

		act(() => {
			vi.advanceTimersByTime(delay);
		});

		expect(result.current).toBeUndefined();

		vi.useRealTimers();
	});

	it("should update debounced value immediately when delay is negative", () => {
		vi.useFakeTimers();
		const value = "test";
		const delay = -1;
		const { result } = renderHook(() => useDebounce(value, delay));

		expect(result.current).toBe(value);

		vi.useRealTimers();
	});
});
