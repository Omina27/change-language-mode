import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "./Context/ThemeContext"
import {Provider as LangProvider} from './Context/LangContext'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <LangProvider>
        <App />
      </LangProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
