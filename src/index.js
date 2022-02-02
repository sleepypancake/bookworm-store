import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App  from './components/app/app';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstoreServiceContext';
import { ErrorBoundry } from './components/error-boundry/errorBoundry';
import BookstoreService from './services/bookstore-service';

import store from './store.js'

const bookstoreService = new BookstoreService()

ReactDOM.render(
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

