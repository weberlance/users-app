import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './screens/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store';

const store = configureStore();

const snackbarAnchorOrigin = { vertical: 'top', horizontal: 'center' };

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={2500} anchorOrigin={snackbarAnchorOrigin}>
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
