import { useEffect, useRef, useState } from "react";

import { useDebounce } from "./useDebounce";

import type React from "react";

type HookType = {
	initialValue: string;
	onChange: (value: string) => void;
};

export const useFilter = ({ initialValue, onChange }: HookType) => {
	const [input, setInput] = useState<string>(initialValue || "");
	const ref = useRef<HTMLInputElement>(null);
	const searchDebounced = useDebounce(input, 600);

	useEffect(() => {
		if (input !== initialValue) {
			onChange(input);
		}
	}, [searchDebounced]);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInput(event.target.value);
	}

	return {
		handleChange,
		input,
		ref,
	};
};
