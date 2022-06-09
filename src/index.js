import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import "react-google-flight-datepicker/dist/main.css";

import './styles/App.css';
import './styles/index.css';
import './styles/SearchPage.css';
import './styles/Header.css';
import './styles/ApartList.css';
import './styles/ThirdPage.css';
import './styles/DatePopup.css';
import './styles/ConfirmPay.css';

import './styles/popups/HeaderActionsPopup.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
