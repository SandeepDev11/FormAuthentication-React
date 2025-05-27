import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PublicRoute from './routing/PublicRoute.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PublicRoute />
  </BrowserRouter>
);
