import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./page/home.jsx"
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
