import Header from 'components/Header';
import { css } from '@emotion/react';
import colors from 'constants/colors';
import { useState } from 'react';

const MainPage = () => {
  const [searchOpened, setSearchOpened] = useState(false);
  const [toggledBtns, setToggledBtns] = useState([]); // 활성화된 토글 버튼들

  return (
    <>
      <Header
        toggledBtns={toggledBtns}
        setToggledBtns={setToggledBtns}
        searchOpened={searchOpened}
        setSearchOpened={setSearchOpened}
      />
      <div
        css={css`
          margin-top: ${searchOpened ? '160px' : '110px'};
          padding-top: 10px;
          background-color: ${colors.grey};
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(366px, auto);
        `}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default MainPage;
