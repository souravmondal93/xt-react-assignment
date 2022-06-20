import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from '../link';
import * as S from './pagination.styled';

const MAX_PAGE_NUMBER = 11;
const MIN_PAGE_NUMBER = 1;

export const Pagination = () => {
  let { pageNumber = 1 } = useParams();

  const [page, setPage] = useState(parseInt(pageNumber, 10));
  const [nextPage, setNextPage] = useState(2);
  const [prevPage, setPrevPage] = useState(1);

  useEffect(() => {
    if (page === MIN_PAGE_NUMBER) {
      setPrevPage(page);
      setNextPage(page + 1);

      return;
    }

    if (page === MAX_PAGE_NUMBER) {
      setPrevPage(page - 1);
      setNextPage(page);

      return;
    }

    setPrevPage(page - 1);
    setNextPage(page + 1);
  }, [page]);

  useEffect(() => {
    setPage(parseInt(pageNumber, 10));
  }, [pageNumber]);

  return (
    <S.PaginationContainer>
      <S.PaginationItem>
        <Link secondary='true' to={`/products/${prevPage}`}>
          Prev Page
        </Link>
      </S.PaginationItem>
      <S.PaginationItem>
        <S.PageNumber>{pageNumber}</S.PageNumber>
      </S.PaginationItem>
      <S.PaginationItem>
        <Link secondary='true' to={`/products/${nextPage}`}>
          Next Page
        </Link>
      </S.PaginationItem>
    </S.PaginationContainer>
  );
};
