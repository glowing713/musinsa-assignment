import colors from 'constants/colors';
import { css } from '@emotion/react';

const Button = ({ children, active, ...rest }) => {
  const backgroundColor = active ? (children === '검색 🔎' ? colors.blue : colors.white) : colors.white;
  const txtColor = active ? (children === '검색 🔎' ? colors.white : colors.blue) : colors.black;

  return (
    <button
      css={css`
        padding: 7px 15px;
        background-color: ${backgroundColor};
        color: ${txtColor};
        border: 1px solid ${colors.grey};
        border-radius: 25px;
        margin-right: 5px;
      `}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
