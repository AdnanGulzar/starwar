import React from 'react'

import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
     
        <App />
      
    </Provider>
  </React.StrictMode>
);
