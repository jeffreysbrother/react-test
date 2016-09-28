import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Another from './Another';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Another />,
  document.getElementById('thing')
);
