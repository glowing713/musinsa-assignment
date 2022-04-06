import colors from 'constants/colors';
import { css } from '@emotion/react';

const TextInput = props => {
  return (
    <input
      css={css`
        color: ${colors.darkgrey};
        width: 100%;
        height: 30px;
        padding: 8px 14px;
        font-weight: 400;
        font-size: 20px;
        outline: none;
        border: 0 none;
      `}
      {...props}
    />
  );
};

export default TextInput;
