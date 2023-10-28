import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <BallTriangle
        height={50}
        width={50}
        radius={8}
        color="rgb(29, 41, 112)"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </StyledLoader>
  );
};
