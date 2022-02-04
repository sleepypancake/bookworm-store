import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App  from './components/app/app';
import { BookstoreServiceProvider } from './components/bookstoreServiceContext/bookstoreServiceContext';
import { ErrorBoundry } from './components/errorBoundry/errorBoundry';
import BookstoreService from './services/bookstore-service';
import './styles/globals.scss'
import store from './store.js'

const bookstoreService = new BookstoreService()

render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorBoundry>
          <BookstoreServiceProvider value={bookstoreService}>
            <Router>
              <App/>
            </Router>
          </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

