import colors from 'constants/colors';
import { css } from '@emotion/react';

const Button = ({ children }) => {
  return (
    <button
      css={css`
        padding: 7px 15px;
        background-color: ${colors.white};
        border: 1px solid ${colors.grey};
        border-radius: 25px;
        margin-right: 5px;
      `}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
