import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Number from './components/Number';
import { useState } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <div id="main">
              <Number></Number>
              <Button>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
