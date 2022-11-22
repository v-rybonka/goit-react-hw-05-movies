import styled from 'styled-components';
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: solid 1px;
  border-radius: 4px;

  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
export const SearchFormButton = styled.button`
  border: solid;
  border-color: orangered;
  border-radius: 3px;
  color: #000;
  padding: 5px 5px;
  &:hover,
  :focus {
    color: white;
    background-color: orangered;
  }
  margin-left: 10px;
  cursor: pointer;
  outline: none;
`;
