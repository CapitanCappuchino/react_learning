import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import axios                from 'axios';

class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            user:{
                'email':    '',
                'password': ''
            },
            isAutintificated: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.storageData  = this.storageData.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        const user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({ user })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = this.state.user;
        const headers = {
            'Content-Type': 'application/json'
        };

        this.props.login(user, headers);

        if(this.props.loginRequest.isFetching === false){
            if(this.props.loginRequest.id){
                const isAutintificated = true;
                this.setState({ isAutintificated });
    
                this.storageData(user);
                localStorage.setItem('isAutintificated', 'true');
    
                this.props.history.push('/profile');
            } else {
                switch(this.props.loginRequest.error){
                    case "wrong_email_or_password":
                        user.password = '';
                        this.setState({ user });
                        
                        alert('Invalid email or password');
                        break;
                    default:
                        alert('something goes wrong');
                }
            }
        } else {
            console.log(this.props.loginRequest);
        }
    }

    storageData = (user) => {
        Object.keys(user).map(function(key, index){
            localStorage.setItem(key, user[key]);
        });
    }

    render(){
        const user = this.state.user;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>Email</div>
                <input 
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={localStorage.getItem('email') || user.email}
                />
                <div>Password</div>
                <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={user.password}
                />
                <input
                    type="submit"
                    name="submit"
                />
            </form>
        );
    }
}

export default withRouter(LoginForm);