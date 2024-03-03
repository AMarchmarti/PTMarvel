import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

type HookType = {
  initialValue: string;
  onChange: (value: string) => void;
};

export const useFilter = ({ initialValue, onChange }: HookType) => {
  const [input, setInput] = useState<string>(initialValue || "");
  const ref = useRef<HTMLInputElement>(null);
  const searchDebounced = useDebounce(input, 600);

  useEffect(() => {
    onChange(input);
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
