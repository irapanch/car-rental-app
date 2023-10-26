import styled from 'styled-components';

export const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  @media screen and (min-width: 859px) {
    display: flex;
    flex-direction: row;
    width: 859px;
    height: 74px;
    align-items: flex-end;
    gap: 18px;

    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & .range-wrap {
    display: flex;
  }
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.28;
  margin-top: 10px;
`;

export const StyledSelectContainer = styled.div`
  position: relative;
  outline-color: none;

  & .icon {
    position: absolute;
    right: 18px;
    top: 14px;

    width: 20px;
    height: 20px;

    pointer-events: none;

    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.btnSecondary};
    }
  }
`;

export const StyledSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  height: 48px;

  border-radius: 14px;
  background: ${props => props.theme.colors.inputBg};
  border-color: transparent;
  appearance: none;
  outline-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.ml};
  font-weight: ${props => props.theme.fontWeights.medium};

  &#brand {
    padding: 14px 18px;
    width: 224px;
  }

  &#price {
    padding: 14px 18px;
    width: 125px;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  border-radius: 14px;
  background: ${props => props.theme.colors.inputBg};
  border-color: transparent;
  outline-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.ml};
  font-weight: ${props => props.theme.fontWeights.medium};

  &#mileage {
    width: 140px;
    height: 48px;
    padding: 14px 24px 14px 24px;

    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    background: ${props => props.theme.colors.inputBg};
    @media screen and (min-width: 859px) {
      width: 160px;
    }
  }

  &#endMileage {
    width: 140px;
    height: 48px;
    padding: 14px 24px 14px 24px;

    border-radius: 0px 14px 14px 0px;
    background: ${props => props.theme.colors.inputBg};
    @media screen and (min-width: 859px) {
      width: 160px;
    }
  }
`;

export const StyledFilterButton = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-color: transparent;
  background: ${props => props.theme.colors.btnLoadMore};

  color: ${props => props.theme.colors.white};
  font-family: Manrope;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.43;
  margin: 10px auto;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.muted};
  }
  @media screen and (min-width: 859px) {
    margin: 0;
  }
`;
