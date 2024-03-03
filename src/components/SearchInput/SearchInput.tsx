import React, { useState } from 'react';
import './SearchInput.css';
import { Form } from 'react-router-dom';

interface SearchInputProps {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    initialValue: string;
    ref: React.RefObject<HTMLInputElement>;
}
const SearchInput = ({ handleSearch, initialValue, ref }: SearchInputProps) => {
    const [querySearch, setQuerySearch] = useState(initialValue)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuerySearch(event.target.value);
        handleSearch(event);
    };
    console.log('ref', ref)
    return (

        <Form>
            <input id='search' name={querySearch.length ? "nameStartsWith" : ''} ref={ref} type="search" value={querySearch} placeholder="Search" onChange={handleChange} />
        </Form>
    );
}

export default SearchInput;