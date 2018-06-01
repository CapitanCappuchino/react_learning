import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { fetchProfile }    from '../../redux/actions/profileAction';
import Profile              from './profile';

class ProfileContainer extends Component{
    render(){
        return(
            <Profile 
                profile={this.props.profile}
                auth={this.props.auth}
                fetchProfile={this.props.fetchProfile}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{
        profile: state.profile,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProfile: () => dispatch(fetchProfile())
    }
}

export default  connect(null, mapDispatchToProps)(ProfileContainer);
