import React from 'react';
/* import { FiSearch } from 'react-icons/fi'; */
import { StyledSearchForm, StyledInput, StyledBtn } from './SearchForm.styled';

const SearchForm = ({ onFormSubmit }) => {
  return (
    <StyledSearchForm onSubmit={onFormSubmit}>
      <StyledInput
        name="searchKey"
        type="text"
        required
        placeholder="Enter movies"
      />

      <StyledBtn type="submit">
        <span>
          {/* <FiSearch size="20" color="black" /> */}
        </span>
      </StyledBtn>
    </StyledSearchForm>
  );
};
export default SearchForm;