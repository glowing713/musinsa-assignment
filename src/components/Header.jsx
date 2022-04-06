import { css } from '@emotion/react';
import Button from 'components/Button';
import Input from 'components/Input';
import colors from 'constants/colors';
import { useEffect, useState } from 'react';

const Header = ({ filters, setFilters, searchOpened, setSearchOpened }) => {
  const btnNames = { search: '검색 🔎', onSale: '세일상품', exclusive: '단독상품', soldOut: '품절포함' };
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <header
      css={css`
        position: sticky;
        left: 0%;
        right: 0%;
        top: 0%;
        background: #ffffff;
        z-index: 10;
      `}
    >
      <h3
        css={css`
          margin: 0;
          padding-top: 15px;
          padding-bottom: 15px;
          font-size: 22px;
          font-weight: 450;
          word-break: keep-all;
          text-align: center;
        `}
      >
        MUSINSA
      </h3>
      <div
        css={css`
          display: flex;
          justify-content: start;
          padding: 10px 0 10px 7px;
        `}
      >
        <Button
          active={searchOpened ? true : undefined}
          onClick={e => {
            clickHandler(e, filters, setFilters);
            setSearchOpened(!searchOpened);
          }}
        >
          {btnNames.search}
        </Button>
        <Button
          active={filters.indexOf(btnNames.onSale) < 0 ? undefined : true}
          onClick={e => clickHandler(e, filters, setFilters)}
        >
          {btnNames.onSale}
        </Button>
        <Button
          active={filters.indexOf(btnNames.exclusive) < 0 ? undefined : true}
          onClick={e => clickHandler(e, filters, setFilters)}
        >
          {btnNames.exclusive}
        </Button>
        <Button
          active={filters.indexOf(btnNames.soldOut) < 0 ? undefined : true}
          onClick={e => clickHandler(e, filters, setFilters)}
        >
          {btnNames.soldOut}
        </Button>
      </div>
      <div
        css={css`
          background-color: ${colors.gray};
          display: ${searchOpened ? 'flex' : 'none'};
          align-items: center;
          justify-contents: center;
          height: 70px;
          background-color: ${colors.lightgray};
        `}
      >
        <SearchBar
          type="text"
          placeholder={'🔎  상품명 검색'}
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
          onKeyDown={e => addSearchKeyword(e, filters, setFilters, setSearchOpened, setSearchKeyword)}
          css={css`
            border: 1px solid;
            border-color: ${colors.gray};
            font-size: 14px;
            margin: 20px 15px;
            height: 22px;
          `}
        />
      </div>
      <div
        css={css`
          display: ${filters.length > 0 ? 'flex' : 'none'};
          height: 50px;
          align-items: center;
          padding: 0 10px;
        `}
      >
        {filters.map(txt => (
          <Button
            css={css`
              border-radius: 6px;
              width: auto;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 11px;
              margin: 0 10px 8px 0;
              color: ${colors.white};
              background-color: ${colors.blue};
              padding: 5px 10px;
            `}
            onClick={e =>
              setFilters(prev => {
                const newOne = [...prev];
                newOne.splice(prev.indexOf(txt), 1);
                return newOne;
              })
            }
          >
            <span
              css={css`
                margin-right: 6px;
              `}
            >
              {txt}
            </span>
            <span>X</span>
          </Button>
        ))}
      </div>
    </header>
  );
};

const SearchBar = props => <Input {...props} />;

const clickHandler = (event, filters, setFilters) => {
  // Button 컴포넌트에서 prop을 핸들링하기 위한 함수
  const btnId = event.target.textContent;
  const index = filters.indexOf(btnId);
  const newState = [...filters];

  if (index >= 0) newState.splice(index, 1); // 해당 버튼이 토글 리스트에 있다면 제거
  if (btnId !== '검색 🔎' && index < 0) newState.push(btnId); // 해당 버튼이 토글 리스트에 없다면 새로 추가

  setFilters(newState);
};

const addSearchKeyword = (event, filters, setFilters, setSearchOpened, setSearchKeyword) => {
  const inputStr = event.target.value.trim();
  const pressedKey = event.key;
  if (inputStr && pressedKey === 'Enter') {
    // 엔터를 누르면 필터 목록에 추가되고, 입력창이 비워지고 사라진다.
    setFilters([...filters, inputStr]);
    setSearchKeyword('');
    setSearchOpened(false);
  }
};

export default Header;
