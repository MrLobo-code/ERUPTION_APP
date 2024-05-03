import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MenuNavbar from './common_user/MenuNavbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuNavbar />
    <App />
  </React.StrictMode>,
)
