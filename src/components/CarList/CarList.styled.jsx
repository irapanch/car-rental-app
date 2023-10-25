import styled from 'styled-components';

export const StyledImageGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 40px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 274px;
  height: 426px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.boxShadowDiv};
  background: ${props => props.theme.colors.cardBackground};
  padding: 4px;
  transition: transform 250ms linear;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const StyledImgContainer = styled.div`
  position: relative;
  width: 274px;
  height: 274px;
  img {
    width: 268px;
    height: 268px;
  }
`;
export const StyledFavBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;

  & .icon {
    width: 18px;
    height: 18px;
    stroke: ${props => props.theme.colors.btnPrimary};
    fill: transparent;

    &:hover,
    &:focus {
      stroke: ${props => props.theme.colors.btnSecondary};
      fill: ${props => props.theme.colors.btnSecondary};
    }

    &.favorite {
      stroke: ${props => props.theme.colors.btnSecondary};
      fill: ${props => props.theme.colors.btnSecondary};
    }
  }
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledTitleWrap = styled.div`
  width: 264px;
`;
export const StyledTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  font-family: Manrope;
  font-size: ${props => props.theme.fontSizes.ml};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-style: normal;
  color: ${props => props.theme.colors.btnPrimary};
  line-height: ${props => props.theme.lineHeights.body};

  & .make {
    display: inline-block;
  }

  & .accent {
    color: ${props => props.theme.colors.text};
  }

  & .price {
    padding-left: 12px;
    display: inline-block;
  }
`;
export const StyledInfo = styled.p`
  color: rgba(18, 20, 23, 0.9);
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
`;

export const StyledLearnMoreBtn = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  border: none;
  padding: 12px;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 600;
  line-height: 1.43em;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.btnSecondary};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.gradient};
  }
`;
