import React, { useEffect } from 'react';
import icon from '../../img/sprite.svg';
import PropTypes from 'prop-types';
import {
  StyledOverlay,
  StyledModal,
  StyledCardWrap,
  StyledImageWrap,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledDescriptionText,
  StyledFuncWrap,
  StyledSubTitle,
  StyledSubWrap,
  StyledFuncDescription,
  StyledConditionsWrap,
  StyledConditionText,
  StyledCardButton,
  StyledCloseButton,
} from './Modal.styled';
// import { useSelector } from 'react-redux';
// import { selectItems } from 'redux/catalog/selectors';

const phoneNumber = '+380730000000';

export const ModalWindow = ({ toggleModal }) => {
  // const item = useSelector(selectItems);

  useEffect(() => {
    document.body.classList.add('modal-open');

    const pressEsc = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
        document.body.classList.remove('modal-open');
      }
    };

    window.addEventListener('keydown', pressEsc);

    return () => {
      window.removeEventListener('keydown', pressEsc);
    };
  }, [toggleModal]);

  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();

      document.body.classList.remove('modal-open');
    }
  };

  const handleClose = () => {
    toggleModal();
    document.body.classList.remove('modal-open');
  };

  return (
    <StyledOverlay onClick={handleClick}>
      <StyledModal>
        <StyledCardWrap>
          <StyledCloseButton type="button" onClick={() => handleClose()}>
            <svg className="icon">
              <use href={`${icon}#icon-close`}></use>
            </svg>
          </StyledCloseButton>
          <StyledImageWrap>
            <StyledImage
              src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/lamborghini_murcielago.webp"
              alt={`Murcielago Lamborghini`}
              loading="lazy"
              onError={e => {
                e.currentTarget.src =
                  'https://automoto.ua/uploads/media/editor/adbe/2-electromobil-LynkCo-02-ecotechnica-com-ua-2.jpg';
              }}
            />
          </StyledImageWrap>
          <StyledTitle>
            {`Murcielago `} <span className="accent">{`Lamborghini`}</span>,{' '}
            2009
          </StyledTitle>
          <StyledDescription>{`Ukraine | Supercar Rentals | Convertible | Id: 5000`}</StyledDescription>
          <StyledDescriptionText>{`The Lamborghini Murcielago is an exotic and high-performance convertible that represents the epitome of Italian automotive engineering, combining breathtaking design, blistering speed, and a spine-tingling exhaust note.`}</StyledDescriptionText>
          <StyledSubWrap>
            <StyledSubTitle>Accessories and functionalities:</StyledSubTitle>
            <StyledFuncWrap>
              <StyledFuncDescription>
                {` Carbon-fiber body panels |  Alcantara upholstery | Lamborghini Infotainment System`}
              </StyledFuncDescription>
              <StyledFuncDescription>
                {`All-Wheel Drive |  Electronic Stability Control | Retractable soft-top roof`}
              </StyledFuncDescription>
            </StyledFuncWrap>
          </StyledSubWrap>
          <StyledSubWrap>
            <StyledSubTitle>Rental Conditions:</StyledSubTitle>
            <StyledConditionsWrap>
              <StyledConditionText>
                Minimum age: <span> {` 25`}</span>
              </StyledConditionText>
              <StyledConditionText>
                {`Valid driver’s license`}
              </StyledConditionText>
              <StyledConditionText>
                {`Security deposite required `}
              </StyledConditionText>
              <StyledConditionText>
                Mileage: <span> {` 5,832`}</span>
              </StyledConditionText>
              <StyledConditionText>
                Price: <span> {` 500$`}</span>
              </StyledConditionText>
            </StyledConditionsWrap>
          </StyledSubWrap>
          <StyledCardButton href={`tel:${phoneNumber}`}>
            Rental car
          </StyledCardButton>
        </StyledCardWrap>
      </StyledModal>
    </StyledOverlay>
  );
};

ModalWindow.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
