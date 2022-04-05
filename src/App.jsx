import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { css } from '@emotion/react';
import colors from 'constants/colors';
import MainPage from 'pages/MainPage';

function App() {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        background-color: ${colors.background};
        height: auto;
      `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
