import { css } from "@emotion/react";

const Header = () => {
  return (
    <>
      <header
        css={css`
          position: absolute;
          left: 0%;
          right: 0%;
          top: 0%;
          bottom: 0%;
          background: #ffffff;
        `}
      >
        MUSINSA
      </header>
      <div
        css={css`
          position: absolute;
          width: 375px;
          height: 55px;
          left: 0px;
          top: 50px;
          background: #ffffff;
        `}
      >
        <button>검색 🔎</button>
        <button>세일상품</button>
        <button>단독상품</button>
        <button>품절포함</button>
      </div>
    </>
  );
};

export default Header;
