import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import styled               from 'styled-components';
import { Grid, Row, Col }   from 'react-flexbox-grid';

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

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.auth.isAutintificated && !prevState.isAutintificated){
            nextProps.history.push('/profile');
            return null;
        } else {
            return null;
        }
    }

    renderResponse = () => {
        const user = this.state.user;
        if(this.props.auth.id){
            const isAutintificated = true;
            this.setState({ isAutintificated });

            this.storageData(user);
            localStorage.setItem('isAutintificated', 'true');
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
            <Grid>
                <Form onSubmit={this.handleSubmit}>
                    <InputRow>
                        <Col lg={1} md={1}>
                            <div>Email</div>
                        </Col>
                        <InputCol lg={3} md={3}> 
                            <TextInput 
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={localStorage.getItem('email') || user.email}
                            />
                        </InputCol>
                    </InputRow>
                    <InputRow>
                        <Col lg={1} md={1}>
                            <div>Password</div>
                        </Col>
                        <InputCol lg={3} md={3}> 
                            <TextInput 
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                value={user.password}
                            />
                        </InputCol>
                    </InputRow>
                    <Row>
                        <InputCol lg={4} md={4}>
                            <TextInput 
                                type="submit"
                                name="submit"
                            />
                        </InputCol>
                    </Row>
                </Form>
            </Grid>
        );
    }
}

const Form = styled.form`
    margin: 10px;
    margin-top: 20px;
`;

const InputRow = styled(Row)`
    align-items: center
    margin-bottom: 8px;
`;

const InputCol = styled(Col)`
    display: flex;
    justify-content: flex-end;
    align-items: center
`;

export default withRouter(LoginForm);