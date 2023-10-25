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
const CarList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    dispatch(fetchAPI({ page, limit }));
  }, [dispatch, page, limit]);
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const cars = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error </p>}
      <StyledImageGallery>
        {cars.length > 0 ? (
          cars.map(item => (
            <StyledListItem key={item.id}>
              <StyledImgContainer>
                <img
                  src={item.img}
                  alt={item.model}
                  height={268}
                  loading="lazy"
                />
                <StyledFavBtn
                  type="button"
                  // onClick={() => addFavorite(id, getFavoriteCars, setIsFavorite)}
                >
                  <svg className={`icon `}>
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

              <StyledLearnMoreBtn type="button">Learn more</StyledLearnMoreBtn>
            </StyledListItem>
          ))
        ) : (
          <p>try again</p>
        )}
      </StyledImageGallery>
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
};

export default CarList;
