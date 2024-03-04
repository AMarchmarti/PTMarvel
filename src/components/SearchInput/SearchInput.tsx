import React, { useState } from "react";
import "./SearchInput.css";
import { Form } from "react-router-dom";

import GlobalIcon from "../Icons/GlobalIcon";

interface SearchInputProps {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    initialValue: string;
    inputRef: React.RefObject<HTMLInputElement>;
}
const SearchInput = ({ handleSearch, initialValue, inputRef }: SearchInputProps) => {
    const [querySearch, setQuerySearch] = useState(initialValue)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuerySearch(event.target.value);
        handleSearch(event);
    };

    return (

        <Form className="searchInput-container">
            <GlobalIcon iconName="SearchIcon" />
            <input id='search' className="input" name={querySearch.length ? "nameStartsWith" : ""} ref={inputRef} type="search" value={querySearch} placeholder="Search a character..." onChange={handleChange} />

        </Form>
    );
}

export default SearchInput;