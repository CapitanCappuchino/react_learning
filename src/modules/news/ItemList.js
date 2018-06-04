import React, { Component } from 'react';
import styled               from 'styled-components';
import { Grid, Row, Col }   from 'react-flexbox-grid';

class ItemList extends Component{
    render(){
        const items = this.props.items;
        const ItemItems = items.map(item => 
            <Element key={item.id}>
                <Grid fluid>
                    <Row>
                        <Col>
                            <Title> {item.title} </Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div> {item.text} </div>
                        </Col>
                    </Row>
                </Grid>
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