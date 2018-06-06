import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

import RoundedButton        from '../elements/buttons/roundedButton';

class NotFoundPage extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                Sorry, page not found
                <RoundedButton dark
                    text='To Home'
                    onClick={this.handleClick} />
            </div>
        );
    }
}

export default withRouter(NotFoundPage);

