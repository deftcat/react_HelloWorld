import React, { Component } from 'react';
import Section from './Section';
export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome',
            subtitle: 'subtitle'
        };
    }
    changeSubtitle(subtitle) {
        this.setState({ subtitle });
    }

    render() {
        return (
            <div>
                <h2 >{this.state.title}</h2>
                <h3>{this.state.subtitle}</h3>
                <Section changeSubtitle={this.changeSubtitle.bind(this)}/>
            </div>
        );
    }
}


