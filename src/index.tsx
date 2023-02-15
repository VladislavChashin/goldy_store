import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppSearch, AppReg } from './App';
import reportWebVitals from './reportWebVitals';


const reg = ReactDOM.createRoot(
  document.getElementById('register') as HTMLElement
);
reg.render(
  <React.StrictMode>
    <AppReg />
  </React.StrictMode>
);

const search = ReactDOM.createRoot(
  document.getElementById('search') as HTMLElement
);
search.render(
  <React.StrictMode>
    < AppSearch/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
