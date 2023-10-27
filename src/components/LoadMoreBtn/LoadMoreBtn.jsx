import React from 'react';
import { StyledLoadBtn } from './LoadMoreBtn.styled';
import PropTypes from 'prop-types';
const LoadMoreBtn = ({ onClick }) => {
  return (
    <StyledLoadBtn type="button" onClick={onClick}>
      Load more
    </StyledLoadBtn>
  );
};

export default LoadMoreBtn;
LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
};
