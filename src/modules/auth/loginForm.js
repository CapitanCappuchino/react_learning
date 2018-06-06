import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import styled               from 'styled-components';
import { Grid, Row, Col }   from 'react-flexbox-grid';
import PropTypes            from 'prop-types';

import DefaultInput         from '../../elements/inputs/defaultInput';
import Error                from '../../elements/resultDivs/error';

class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            user:{
                'email':    '',
                'password': ''
            }
        }
        this.handleChange   = this.handleChange.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        const { user } = this.state;
        const { auth } = nextProps;
        if(auth.isAutintificated){
            this.props.history.push('/profile')       
        } else if(auth.error){
            user.password = '';
            this.setState({ user });
        }
    }

    handleChange = (e) => {
        e.preventDefault();

        const { user } = this.state;
        user[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ user })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { user } = this.state;
        if(!user.email || !user.password){
            alert('Please input items');
        } else {
            this.props.login(user);
        }
    }

    render(){
        const { user } = this.state;
        const { auth } = this.props;
        return(
            <Grid>
                <Form onSubmit={this.handleSubmit}>
                    <Error error={auth.error} />
                    <InputRow>
                        <Col lg={1} md={1}>
                            <div>Email</div>
                        </Col>
                        <InputCol lg={3} md={3}> 
                            <DefaultInput 
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
                            <DefaultInput 
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                value={user.password}
                                disabled={auth.isFetching}
                            />
                        </InputCol>
                    </InputRow>
                    <Row>
                        <InputCol lg={4} md={4}>
                            <DefaultInput 
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

LoginForm.PropTypes = {
    auth: PropTypes.shape({
        id: PropTypes.string,
        error: PropTypes.string,
        isFetchng: PropTypes.bool,
        isAutintificated: PropTypes.bool
    }),
    login: PropTypes.func
};

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