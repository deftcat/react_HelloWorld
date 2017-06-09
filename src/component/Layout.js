import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import Navigator from './Navigator';
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigator />
                <hr/>
                <Container />
                <Footer />
                <h6>{this.props.author}</h6>
            </div>
        );
    }
}


