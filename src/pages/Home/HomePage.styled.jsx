import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import loginMobile from '../../img/RentalBgMob.jpg';
import loginDesc from '../../img/RentalBg.jpg';

export const StyledHome = styled.div`
  min-height: calc(100vh - 86px);
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => props.theme.colors.background};
  background-image: url(${loginMobile});
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    background-image: url(${loginDesc});
    justify-content: end;
  }
  @media screen and (min-width: 986px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const StyledHeading = styled.h1`
  padding-right: 15px;
  margin: 0;
  text-align: end;
  color: ${props => props.theme.colors.white};
`;
export const StyledText = styled.h3`
  padding-right: 15px;
  display: block;
  max-width: 500px;
  text-align: end;
  color: ${props => props.theme.colors.white};
  @media screen and (min-width: 986px) {
    text-align: center;
  }
`;
export const StyledSpan = styled(NavLink)`
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  max-width: 500px;
  text-align: end;
  color: ${props => props.theme.colors.btnPrimary};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &.favspan {
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.l};
    font-weight: ${props => props.theme.fontWeights.medium};
    display: block;
  }
`;

export const StyledUpSpan = styled.span`
  background-color: ${props => props.theme.colors.gradient};
  font-size: 36px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: ${props => props.theme.colors.gradient};
    font-weight: ${props => props.theme.fontWeights.bold};
    transform: scale(1.05);
  }
`;
