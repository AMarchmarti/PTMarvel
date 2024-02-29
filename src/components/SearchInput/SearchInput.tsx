import React, { useState } from 'react';
import './SearchInput.css';

interface SearchInputProps {
    handleSearch: (query: string) => void;
    initialValue?: string;
}
const SearchInput = ({ handleSearch, initialValue }: SearchInputProps) => {
    const [querySearch, setQuerySearch] = useState(initialValue)
    const handleChange = (event: any) => {
        setQuerySearch(event.target.value);
        handleSearch(event.target.value);
    };
    return (
        <div>
            <input type="text" value={querySearch} placeholder="Search" onChange={handleChange} />
        </div>
    );
}

export default SearchInput;