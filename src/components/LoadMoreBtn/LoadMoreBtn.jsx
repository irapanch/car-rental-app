import React from 'react';
import { StyledLoadBtn } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <StyledLoadBtn type="button" onClick={onClick}>
      Load more
    </StyledLoadBtn>
  );
};

export default LoadMoreBtn;
