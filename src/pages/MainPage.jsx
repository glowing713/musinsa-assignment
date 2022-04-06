import Header from 'components/Header';
import Product from 'components/Product';
import { css } from '@emotion/react';
import colors from 'constants/colors';
import { useCallback, useRef, useState } from 'react';
import useProductSearch from 'hooks/useProductSearch';
import { Oval } from 'react-loader-spinner';
import useFilterList from '../hooks/useFilterList';

const MainPage = () => {
  const [searchOpened, setSearchOpened] = useState(false);
  const [filters, setFilters] = useState([]); // 활성화된 토글 버튼들

  const [pageNumber, setPageNumber] = useState(0); // 상품 목록 페이지 번호(lazy loading)
  const { isLoading, products, hasMore } = useProductSearch(pageNumber);
  const observer = useRef();
  const lastProductRef = useCallback(
    el => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPage => prevPage + 1);
        }
      });
      if (el) observer.current.observe(el);
    },
    [isLoading, hasMore]
  ); // 지금까지 불러온 마지막 상품의 ref

  const filteredProducts = useFilterList(products, filters);

  return (
    <>
      <Header filters={filters} setFilters={setFilters} searchOpened={searchOpened} setSearchOpened={setSearchOpened} />
      <div
        css={css`
          padding-top: 10px;
          background-color: ${colors.gray};
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(340px, auto);
        `}
      >
        {filteredProducts.map((product, index) =>
          index === filteredProducts.length - 1 ? (
            <Product ref={lastProductRef} key={product.goodsNo} {...product} />
          ) : (
            <Product key={product.goodsNo} {...product} />
          )
        )}
      </div>
      <div
        css={css`
          display: ${isLoading ? 'flex' : 'none'};
          justify-content: center;
          align-items: center;
        `}
      >
        <Oval color={colors.darkgray} height={20} width={20} />
      </div>
    </>
  );
};

export default MainPage;
