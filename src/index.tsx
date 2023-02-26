import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './sourse/fonts/inter/stylesheet.css'
import './sourse/fonts/prata/stylesheet.css'
import './sourse/reset.css'
import './components/header/header.css';
import './components/header/modal_reg.css';
import './components/main/css/slider.css';
import './components/main/css/popular_cat.css'
import './components/main/css/sale.css'
import './components/main/css/productday.css'
import './components/footer/css/articles.css'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
