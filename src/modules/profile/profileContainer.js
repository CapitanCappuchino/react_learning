import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { fetchProfile }     from '../../redux/actions/profileAction';
import Profile              from './profile';

class ProfileContainer extends Component{
    render(){
        return(
            <Profile 
                profile={this.props.profile}
                fetchProfile={this.props.fetchProfile}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
})

const mapDispatchToProps = (dispatch) => ({
    fetchProfile: () => dispatch(fetchProfile())
})

export default  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
