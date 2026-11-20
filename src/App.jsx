import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './config/language';
import './styles/variables.css';
import './styles/globals.css';
import './styles/rtl.css';
import AppRoutes from './routes/AppRoutes';
import CursorAnimation from './components/ui/CursorAnimation/CursorAnimation';
import FloatingAction from './components/ui/FloatingAction/FloatingAction';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
        <CursorAnimation />
        <FloatingAction />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

