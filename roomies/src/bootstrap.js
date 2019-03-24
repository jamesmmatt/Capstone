import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';

import Roomies from './components/roomies';
import SignUp from './components/auth/signUp';
import SignIn from './components/auth/signIn';
import Home from './components/home';
import requireAuth from './components/requireAuth';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Roomies>
          <Switch>
            <Route path='/signIn' exact component={SignIn}/>
            <Route path='/signUp' exact component={SignUp}/>
            <Route path='/' exact component={SignIn}/>
            {/* <Route path='/home' exact component={requireAuth(Home)}/> */}
            <Route path='/home' exact component={Home}/>
          </Switch>          
        </Roomies>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
