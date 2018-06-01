import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import axios                from 'axios';
import styled               from 'styled-components';

import TextInput            from '../../elements/Inputs/textInput';

class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            user:{
                'email':    '',
                'password': ''
            },
            isAutintificated: false,
            isErrored: false
        }
        this.handleChange   = this.handleChange.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
        this.storageData    = this.storageData.bind(this);
        this.renderResponse = this.renderResponse.bind(this);
    }
    componentDidUpdate = () => {
        if(this.props.auth.isFetching === false
            && !(localStorage.getItem('isAutintificated'))
            && !(this.state.isErrored)){
            this.renderResponse();
        }
    }

    renderResponse = () => {
        const user = this.state.user;
        if(this.props.auth.id){
            const isAutintificated = true;
            this.setState({ isAutintificated });

            this.storageData(user);
            localStorage.setItem('isAutintificated', 'true');

            this.props.history.push('/profile');
        } else {
            switch(this.props.auth.error){
                case "wrong_email_or_password":
                    user.password = '';
                    this.setState({ user });
                    
                    alert('Invalid email or password');
                    break;
                default:
                    alert('something goes wrong');
            }
            const isErrored = true;
            this.setState({ isErrored });
        }
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
    }

    storageData = (user) => {
        Object.keys(user).map(function(key, index){
            localStorage.setItem(key, user[key]);
        });
    }

    render(){
        const user = this.state.user;
        return(
            <Form onSubmit={this.handleSubmit}>
                <div>Email</div>
                <TextInput 
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={localStorage.getItem('email') || user.email}
                />
                <div>Password</div>
                <TextInput 
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={user.password}
                />
                <SubmitField>
                    <TextInput 
                        type="submit"
                        name="submit"
                    />
                </SubmitField>
            </Form>
        );
    }
}

const Form = styled.form`
    margin: 10px;
`;

const SubmitField = styled.div`
    margin-top: 5px;
`;

export default withRouter(LoginForm);