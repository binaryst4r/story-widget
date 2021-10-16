import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const WidgetNodes = document.querySelectorAll('.story-widget')

WidgetNodes.forEach(node => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    node
  );
})
