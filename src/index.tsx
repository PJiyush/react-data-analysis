import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core'; // importing the MantineProvider
import '@mantine/core/styles.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider>     {/* wrapping the app component to mantime provider */}
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </MantineProvider>
);

reportWebVitals();
