import { css } from '@emotion/react';
import Button from 'components/Button';

const Header = () => {
  return (
    <>
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
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 22px;
            font-weight: 450;
            line-height: 35px;
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
            padding: 5px 0 5px 7px;
          `}
        >
          <Button>검색 🔎</Button>
          <Button>세일상품</Button>
          <Button>단독상품</Button>
          <Button>품절포함</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
