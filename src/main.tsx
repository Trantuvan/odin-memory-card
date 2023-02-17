import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@components/App';
import GlobalStyle from '@components/global-styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>,
);
