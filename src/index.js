import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/Global';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/car-rental-app">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);
