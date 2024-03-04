import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";

import { useFilter } from "./useFilter";

describe("useFilter", () => {
	it("should not call onChange with the initial value", () => {
		const initialValue = "test";
		const onChange = vi.fn();
		renderHook(() => useFilter({ initialValue, onChange }));

		expect(onChange).not.toHaveBeenCalledWith(initialValue);
	});

	it("should call onChange with the updated value after debounce delay", () => {
		vi.useFakeTimers();
		const initialValue = "test";
		const onChange = vi.fn();
		const { result } = renderHook(() =>
			useFilter({ initialValue, onChange }),
		);

		const newValue = "updated value";
		act(() => {
			result.current.handleChange({
				target: { value: newValue },
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(onChange).not.toHaveBeenCalledWith(initialValue);
		expect(onChange).not.toHaveBeenCalledWith(newValue);

		act(() => {
			vi.advanceTimersByTime(600);
		});

		expect(onChange).toHaveBeenCalledWith(newValue);

		vi.useRealTimers();
	});
});
