import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPI } from '../../redux/catalog/operations';
import {
  selectError,
  selectIsLoading,
  selectItems,
} from '../../redux/catalog/selectors';
import { Loader } from 'components/Loader/Loader';
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
} from './CarList.styled';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import icon from '../../img/sprite.svg';
import { selectFavoriteCarList } from 'redux/favorite/selectors';
import { addFavorites, deleteFavorites } from 'redux/favorite/slice';
import PropTypes from 'prop-types';

const CarList = ({ toggleModal, setCurrentCar }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 12;
  const handleLearnMoreClick = id => {
    toggleModal(true);
    setCurrentCar(id);
  };

  useEffect(() => {
    dispatch(fetchAPI({ page, limit }));
  }, [dispatch, page, limit]);
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const cars = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const favoriteCar = useSelector(selectFavoriteCarList);

  const isAdded = item => {
    return favoriteCar.some(favCar => favCar.id === item.id);
  };
  const handleAddFav = item => {
    if (isAdded(item)) {
      dispatch(deleteFavorites(item.id));
    } else {
      dispatch(addFavorites(item));
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error</p>}
      <StyledImageGallery>
        {cars.length > 0 ? (
          cars.map(item => {
            const isAdded = favoriteCar.some(favCar => favCar.id === item.id);

            return (
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
                    onClick={() => handleAddFav(item)}
                  >
                    {isAdded ? (
                      <svg className={`icon favorite`}>
                        <use href={`${icon}#icon-heart`}></use>
                      </svg>
                    ) : (
                      <svg className={`icon `}>
                        <use href={`${icon}#icon-heart`}></use>
                      </svg>
                    )}
                  </StyledFavBtn>
                </StyledImgContainer>
                <StyledDesc>
                  <StyledTitleWrap>
                    <StyledTitle>
                      <span className="make">
                        {item.make}{' '}
                        <span className="accent">{item.model},</span>{' '}
                        {item.year}
                      </span>
                      <span className="price">{item.rentalPrice}</span>
                    </StyledTitle>
                  </StyledTitleWrap>
                  <StyledInfo>{`Ukraine | ${item.rentalCompany} | ${item.type} | ${item.id}`}</StyledInfo>
                </StyledDesc>

                <StyledLearnMoreBtn
                  type="button"
                  onClick={() => handleLearnMoreClick(item.id)}
                >
                  Learn more
                </StyledLearnMoreBtn>
              </StyledListItem>
            );
          })
        ) : (
          <p>No results</p>
        )}
      </StyledImageGallery>
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
};
export default CarList;
CarList.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  setCurrentCar: PropTypes.func.isRequired,
};
