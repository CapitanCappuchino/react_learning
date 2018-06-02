import React, { Component } from 'react';
import { 
  Switch, 
  Route, 
  Redirect,
  withRouter }              from 'react-router-dom';
import { connect }          from 'react-redux';

import ProfilePage          from './pages/profilePage';
import NewsPage             from './pages/newsPage';
import AuthPage             from './pages/authPage';
import HomePage             from './pages/homePage';

class Routes extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAutintificated: this.props.auth.isAutintificated
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.auth.isAutintificated && !prevState.isAutintificated){
          return{
            isAutintificated: true
          }  
        } else {
            return null;
        }
    }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ HomePage } />  
          <Route path='/login'  component={ AuthPage } />
          <Route path='/news'   component={ NewsPage } />
          {this.props.auth.isAutintificated &&
          <PrivateRoute 
            condition={
              localStorage.getItem('isAutintificated') === 'true'
              && this.state.isAutintificated}
            path='/profile' 
            component={ ProfilePage }
          />}
          </Switch>
      </div>
    );
  }
} 

function PrivateRoute ({component: Component, condition, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => condition
        ? <Component {...props} />
        : <Redirect to='/login' />}
    />
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.auth
  }
}

export default withRouter(
  connect(mapStateToProps, null)(Routes)
);
