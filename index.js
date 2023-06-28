import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Recovery from './routes/RecoveryPage'
import CloudPage from './routes/CloudPage'
import ContactPage from './routes/ContactPage'
import SeguridadPage from './routes/SeguridadPage';
import ApPage from './routes/AplicacionesPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<Recovery />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/seguridad' element={<SeguridadPage />} />
      <Route path='/aplicaciones' element={<ApPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

