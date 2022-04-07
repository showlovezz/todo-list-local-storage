import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import './index.scss';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
