import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout/Layout';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import allReducers from './Redux/Reducers';
import { BrowserRouter } from 'react-router-dom';

let store = configureStore({
  reducer: allReducers,
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
