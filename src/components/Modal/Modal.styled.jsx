import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 2;

  overflow: auto;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0 auto;
  border-radius: 24px;
  background: ${props => props.theme.colors.background};
  z-index: 3;
  width: 320px;
  @media screen and (min-width: 485px) {
    width: 541px;
  }
`;

export const StyledCardWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;

  @media screen and (min-width: 485px) {
    padding: 40px;
    width: 541px;
  }
`;

export const StyledCloseButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;

  & .icon {
    width: 24px;
    height: 24px;
    stroke: ${props => props.theme.colors.text};

    &:hover,
    &:focus {
      stroke: ${props => props.theme.colors.btnLoadMore};
    }
  }
  @media screen and (min-width: 485px) {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

export const StyledImageWrap = styled.div`
  position: relative;
  width: 300px;
  min-height: 248px;
  margin-bottom: 14px;

  overflow: hidden;

  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  @media screen and (min-width: 485px) {
    width: 460px;
    min-height: 248px;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const StyledTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.ml};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.body};

  margin-bottom: 8px;

  & .accent {
    color: ${props => props.theme.colors.btnLoadMore};
  }
`;

export const StyledDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  width: 277px;
  margin-bottom: 14px;
`;

export const StyledDescriptionText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const StyledSubWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledSubTitle = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.43;
`;

export const StyledFuncWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const StyledFuncDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
`;

export const StyledRentalConditionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledConditionsWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledConditionText = styled.p`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  letter-spacing: -0.24px;

  & span {
    color: ${props => props.theme.colors.spanText};
    font-weight: 600;
  }
`;

export const StyledCardButton = styled.a`
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${props => props.theme.colors.spanText};
  color: ${props => props.theme.colors.white};
  font-family: Manrope;
  font-size: ${props => props.theme.fontSizes.s};
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.muted};
  }
`;
