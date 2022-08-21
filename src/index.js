import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux';
import { Provider } from "react-redux";
import { connectInBack } from './redux/connect';
const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(connectInBack())

root.render(
      <Provider store={store}>
          <App />
      </Provider>
);

reportWebVitals();
