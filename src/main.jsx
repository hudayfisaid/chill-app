import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer draggable />
  </React.StrictMode>
);

