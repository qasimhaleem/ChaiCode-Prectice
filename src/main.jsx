import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import Cards from './components/Card.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cards name="M.Qasim" description="MERN stac developer" bgImage="https://randomuser.me/api/portraits/men/15.jpg" />
  </StrictMode>,
)
