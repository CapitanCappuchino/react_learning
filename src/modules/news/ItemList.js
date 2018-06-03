import React, { Component } from 'react';
import styled               from 'styled-components';

class ItemList extends Component{
    render(){
        const items = this.props.items;
        const ItemItems = items.map(item => 
            <Element key={item.id}>
                <Title> {item.title} </Title>
                <div> {item.text} </div>
            </Element>
        );
        return(
            <div> {ItemItems} </div>
        );
    }
}

const Element = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h4`
    font-size: 30px;
    margin-bottom: 5px;
`;

export default ItemList;