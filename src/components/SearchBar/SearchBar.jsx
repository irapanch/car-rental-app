import React from 'react';
import icon from '../../img/sprite.svg';
import {
  StyledContainer,
  StyledFilterButton,
  StyledInput,
  StyledInputWrap,
  StyledLabel,
  StyledSelect,
  StyledSelectContainer,
} from './SearchBar.styled';

const SearchBar = () => {
  return (
    <StyledContainer>
      <StyledInputWrap>
        <StyledLabel htmlFor="brand">Car brand</StyledLabel>
        <StyledSelectContainer>
          <StyledSelect id="brand"></StyledSelect>
          <svg className="icon">
            <use href={`${icon}${'#icon-chevron-top'}`}></use>
          </svg>
        </StyledSelectContainer>
      </StyledInputWrap>
      <StyledInputWrap>
        <StyledLabel htmlFor="price">Price/ 1 hour</StyledLabel>
        <StyledSelectContainer>
          <StyledSelect id="price"></StyledSelect>
          <svg className="icon">
            <use href={`${icon}${'#icon-chevron-top'}`}></use>
          </svg>
        </StyledSelectContainer>
      </StyledInputWrap>
      <StyledInputWrap>
        <StyledLabel htmlFor="mileage">Сar mileage / km</StyledLabel>
        <div className="range-wrap">
          <StyledInput type="text" id="mileage" placeholder="From" />
          <StyledInput type="text" id="endMileage" placeholder="To" />
        </div>
      </StyledInputWrap>
      <StyledFilterButton>Search</StyledFilterButton>
    </StyledContainer>
  );
};

export default SearchBar;
