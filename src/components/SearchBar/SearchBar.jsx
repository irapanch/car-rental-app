import React, { useState } from 'react';
import icon from '../../img/sprite.svg';
import {
  StyledFilterButton,
  StyledForm,
  StyledInput,
  StyledInputWrap,
  StyledLabel,
  StyledSelect,
  StyledSelectContainer,
} from './SearchBar.styled';

const SearchBar = () => {
  const [brandList, setBrandList] = useState(false);
  const [pricelList, setPricelList] = useState(false);
  const carBrands = [
    'Enter the text',
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  const prices = ['', 10, 20, 30, 40, 50, 60, 70, 80, 100];
  const dataSubmit = e => {
    e.preventDefault();
  };
  const handleBrandList = () => {
    setBrandList(true);
  };
  const handleBrandListChange = () => {
    setBrandList(false);
  };
  const handlePriceList = () => {
    setPricelList(true);
  };

  const handlePriceListChange = () => {
    setPricelList(false);
  };
  return (
    <StyledForm onSubmit={dataSubmit}>
      <StyledInputWrap>
        <StyledLabel htmlFor="brand">Car brand</StyledLabel>
        <StyledSelectContainer>
          <StyledSelect
            id="brand"
            onFocus={handleBrandList}
            onChange={handleBrandListChange}
          >
            {carBrands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </StyledSelect>
          <svg className="icon">
            <use
              href={`${icon}${
                brandList ? '#icon-chevron-top' : '#icon-chevron-down'
              }`}
            ></use>
          </svg>
        </StyledSelectContainer>
      </StyledInputWrap>
      <StyledInputWrap>
        <StyledLabel htmlFor="price">Price/ 1 hour</StyledLabel>
        <StyledSelectContainer>
          <StyledSelect
            id="price"
            onFocus={handlePriceList}
            onChange={handlePriceListChange}
          >
            {prices.map(price => (
              <option key={price} value={price}>
                To {price} $
              </option>
            ))}
          </StyledSelect>
          <svg className="icon">
            <use
              href={`${icon}${
                pricelList ? '#icon-chevron-top' : '#icon-chevron-down'
              }`}
            ></use>
          </svg>
        </StyledSelectContainer>
      </StyledInputWrap>
      <StyledInputWrap>
        <StyledLabel htmlFor="mileage">Сar mileage / km</StyledLabel>
        <div className="range-wrap">
          <StyledInput
            type="number"
            id="mileage"
            placeholder="From"
            min="0"
            step="1"
          />
          <StyledInput
            type="number"
            id="endMileage"
            placeholder="To"
            min="0"
            step="1"
          />
        </div>
      </StyledInputWrap>
      <StyledFilterButton>Search</StyledFilterButton>
    </StyledForm>
  );
};

export default SearchBar;
