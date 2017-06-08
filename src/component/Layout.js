import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
export default class Layout extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <Container />
                <Footer />
                <h6>{this.props.author}</h6>
            </div>
        );
    }
}


