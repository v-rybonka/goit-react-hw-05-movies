import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();

    if (value.trim()) {
      onSearch(value);
      setValue('');
    }
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          value={value}
          onChange={evt => setValue(evt.target.value)}
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </>
  );
};
