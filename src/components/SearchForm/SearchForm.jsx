import React from 'react';
import { TbSearch  } from 'react-icons/tb';
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
          {<TbSearch  size="20" color="black" />}
        </span>
      </StyledBtn>
    </StyledSearchForm>
  );
};
export default SearchForm;