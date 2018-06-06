import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';

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
};

ProfileContainer.PropTypes = {
    profile: PropTypes.shape({
        data: PropTypes.object,
        error: PropTypes.string,
        isFetching: PropTypes.bool,
        isFound: PropTypes.bool
    }),
    fetchProfile: PropTypes.func
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProfile: () => dispatch(fetchProfile())
});

export default  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
