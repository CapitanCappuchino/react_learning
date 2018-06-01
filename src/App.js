import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';

import DefaultHeader        from './modules/navigation/header/header';
import Routes               from './routes';
import { login }            from './redux/actions/authAction';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isAutintificated: this.props.auth.isAutintificated
    }
  }

  componentDidMount = () => {
    if(localStorage.getItem('isAutintificated') === 'true' 
      && this.props.auth.isAutintificated === false){
        const headers = {
          'Content-Type': 'application/json'
        };
        const user = {
          'email':    localStorage.getItem('email'),
          'password': localStorage.getItem('password')
        };
        this.props.login(user, headers);
      }
  }

  render() {
    return (
      <div>
        <DefaultHeader />
        <Routes />
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return{
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (user, headers) => dispatch(login(user, headers))
  }
}

export default  withRouter(
connect(mapStateToProps, mapDispatchToProps)(App));
