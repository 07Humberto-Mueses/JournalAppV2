import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JournalApp';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
