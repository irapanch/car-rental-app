import React from 'react';
import {
  StyledHeading,
  StyledHome,
  StyledSpan,
  StyledText,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHome>
      {' '}
      <StyledHeading>Welcome to Car Rental Service!</StyledHeading>
      <StyledText>
        <StyledSpan to="/catalog">Choose auto</StyledSpan> with this app, which
        allows to view, to find and to save your{' '}
        <StyledSpan to="/favorites"> favorites!</StyledSpan>
      </StyledText>
    </StyledHome>
  );
};

export default HomePage;
