import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const obj = (
  <a href="google.com" target="_blank"> visit google </a>
);

const reactElement = React.createElement(
  'a',
  {
    'href': "google.com",
    'target': "_blank"
  },
  'visit google'
);

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
