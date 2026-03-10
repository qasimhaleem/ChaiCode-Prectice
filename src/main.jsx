import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PasswrodGenerator from './components/PasswrodGenerator';
import App from './components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswrodGenerator />
  </StrictMode>,
)
