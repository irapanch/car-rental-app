import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.main`
  margin: 0 auto;
  padding: 0;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px 20px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
  background: ${props => props.theme.colors.cardBackground};
  box-shadow: ${props => props.theme.shadows.boxShadowHeader};

  > nav {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 11px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 15px #2a2a2a;
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.gradient};
    box-shadow: 0 0 15px #2a2a2a;
  }
`;
export const StyledLogo = styled(NavLink)`
  width: 60px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
  }
  &.active {
  }
  img {
    display: none;
    @media screen and (min-width: 425px) {
      display: block;
      width: 60px;
    }
  }
`;
