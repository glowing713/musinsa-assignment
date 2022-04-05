import colors from 'constants/colors';
import { css } from '@emotion/react';
import { useState } from 'react';

const Button = ({ children }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);

  return (
    <button
      css={css`
        padding: 7px 15px;
        background-color: ${isBtnActive ? colors.blue : colors.white};
        color: ${isBtnActive ? colors.white : colors.black};
        border: 1px solid ${colors.grey};
        border-radius: 25px;
        margin-right: 5px;
      `}
      onClick={() => setIsBtnActive(!isBtnActive)}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
