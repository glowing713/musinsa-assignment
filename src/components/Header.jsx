import { css } from '@emotion/react';
import Button from 'components/Button';
import Input from 'components/Input';
import colors from 'constants/colors';
import { useState } from 'react';

const Header = ({ toggledBtns, setToggledBtns, searchOpened, setSearchOpened }) => {
  const btnNames = { search: '검색 🔎', onSale: '세일상품', exclusive: '단독상품', soldOut: '품절포함' };
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <header
      css={css`
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        background: #ffffff;
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
          active={toggledBtns.indexOf(btnNames.search) < 0 ? undefined : true}
          onClick={e => {
            clickHandler(e, toggledBtns, setToggledBtns);
            setSearchOpened(!searchOpened);
          }}
        >
          {btnNames.search}
        </Button>
        <Button
          active={toggledBtns.indexOf(btnNames.onSale) < 0 ? undefined : true}
          onClick={e => {
            clickHandler(e, toggledBtns, setToggledBtns);
          }}
        >
          {btnNames.onSale}
        </Button>
        <Button
          active={toggledBtns.indexOf(btnNames.exclusive) < 0 ? undefined : true}
          onClick={e => {
            clickHandler(e, toggledBtns, setToggledBtns);
          }}
        >
          {btnNames.exclusive}
        </Button>
        <Button
          active={toggledBtns.indexOf(btnNames.soldOut) < 0 ? undefined : true}
          onClick={e => clickHandler(e, toggledBtns, setToggledBtns)}
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
          onKeyDown={e => addSearchKeyword(e, toggledBtns, setToggledBtns)}
          css={css`
            border: 1px solid;
            border-color: ${colors.gray};
            font-size: 14px;
            margin: 20px 15px;
            height: 22px;
          `}
        />
      </div>
    </header>
  );
};

const SearchBar = props => <Input {...props} />;

const clickHandler = (event, toggledBtns, setToggledBtns) => {
  // Button 컴포넌트에서 prop을 핸들링하기 위한 함수
  const btnId = event.target.textContent;
  const index = toggledBtns.indexOf(btnId);
  const newState = [...toggledBtns];

  if (index >= 0) newState.splice(index, 1); // 해당 버튼이 토글 리스트에 있다면 제거
  if (btnId !== '검색 🔎' && index < 0) newState.push(btnId); // 해당 버튼이 토글 리스트에 없다면 새로 추가

  setToggledBtns(newState);
};

const addSearchKeyword = (event, toggledBtns, setToggledBtns) => {
  const inputStr = event.target.value.trim();
  const pressedKey = event.key;
  if (inputStr && pressedKey === 'Enter') {
    setToggledBtns([...toggledBtns, inputStr]);
  }
};

export default Header;
