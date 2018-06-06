import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class LanguageList extends Component{
    render(){
        const languages = this.props.languages;
        const LanguageItems = languages.map(language => 
            <div key={language}>+ {language}</div>
        );
        return(
            <div>{LanguageItems}</div>
        );
    }
}

LanguageList.PropTypes = {
    languages: PropTypes.array
};

export default LanguageList;