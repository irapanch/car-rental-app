import React from 'react';
import { StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </>
  );
};

export default Layout;
