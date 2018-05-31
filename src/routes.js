import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfilePage from './pages/profilePage';
import NewsPage from './pages/newsPage';
import AuthPage from './pages/authPage';
import HomePage from './pages/homePage';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />  
          <Route path='/login' component={AuthPage} />
          <Route path='/news' component={NewsPage} />
          <PrivateRoute 
            condition={localStorage.getItem('isAutintificated')}
            path='/profile' 
            component={ProfilePage}
          />
          </Switch>
      </div>
    );
  }
} 

function PrivateRoute ({component: Component, condition, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => condition === "true"
        ? <Component {...props} />
        : <Redirect to='/login' />}
    />
  )
}


export default Routes;
