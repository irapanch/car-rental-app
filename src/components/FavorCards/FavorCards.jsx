import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCarList } from 'redux/favorite/selectors';
import { deleteFavorites } from 'redux/favorite/slice';
import {
  StyledDesc,
  StyledFavBtn,
  StyledImageGallery,
  StyledImgContainer,
  StyledInfo,
  StyledLearnMoreBtn,
  StyledListItem,
  StyledTitle,
  StyledTitleWrap,
} from '../CarList/CarList.styled';
import { selectError, selectIsLoading } from '../../redux/catalog/selectors';
import icon from '../../img/sprite.svg';
import { StyledSpan } from 'pages/Home/HomePage.styled';

const FavorCards = ({ toggleModal, setCurrentCar }) => {
  const dispatch = useDispatch();
  const favoriteCar = useSelector(selectFavoriteCarList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const handldeleteFavorites = id => {
    dispatch(deleteFavorites(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error</p>}
      <StyledImageGallery>
        {favoriteCar?.length > 0 ? (
          favoriteCar.map(item => (
            <StyledListItem key={item.id}>
              <StyledImgContainer>
                <img
                  src={item.img}
                  alt={`${item.model} ${item.make}`}
                  height={268}
                  loading="lazy"
                  onError={e => {
                    e.currentTarget.src =
                      'https://automoto.ua/uploads/media/editor/adbe/2-electromobil-LynkCo-02-ecotechnica-com-ua-2.jpg';
                  }}
                />

                <StyledFavBtn
                  type="button"
                  onClick={() => handldeleteFavorites(item.id)}
                >
                  <svg className={`icon favorite`}>
                    <use href={`${icon}#icon-heart`}></use>
                  </svg>
                </StyledFavBtn>
              </StyledImgContainer>
              <StyledDesc>
                <StyledTitleWrap>
                  <StyledTitle>
                    <span className="make">
                      {item.make} <span className="accent">{item.model},</span>{' '}
                      {item.year}
                    </span>
                    <span className="price">{item.rentalPrice}</span>
                  </StyledTitle>
                </StyledTitleWrap>
                <StyledInfo>{`Ukraine | ${item.rentalCompany} | ${item.type} | ${item.id}`}</StyledInfo>
              </StyledDesc>

              <StyledLearnMoreBtn
                type="button"
                onClick={() => {
                  toggleModal(toggleModal);
                  setCurrentCar(setCurrentCar);
                }}
              >
                Learn more
              </StyledLearnMoreBtn>
            </StyledListItem>
          ))
        ) : (
          <StyledSpan to="/catalog" className="favspan">
            {' '}
            Let's choose your favorite auto!
          </StyledSpan>
        )}
      </StyledImageGallery>
    </>
  );
};

export default FavorCards;
