import React from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledNavLink,
} from './Layout.styled';
import logoImg from '../../img/alert-img.png';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo to="/">
          <img src={logoImg} alt="logoImg" />
        </StyledLogo>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default Layout;
