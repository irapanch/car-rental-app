import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 859px) {
    padding: 50px 15px;
  }
`;

export const StyledLoadBtn = styled.button`
  cursor: pointer;
  color: ${props => props.theme.colors.btnLoadMore};
  font-family: Manrope;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.body};
  text-decoration-line: underline;
  padding: 0 20px;
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.muted};
  }
`;
