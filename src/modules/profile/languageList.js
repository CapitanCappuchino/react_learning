import React, { Component } from 'react';

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

export default LanguageList;