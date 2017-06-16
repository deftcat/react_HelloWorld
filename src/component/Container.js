import React, { Component } from 'react';
import Section from './Section';
export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome',
            subtitle: 'subtitle',
            currentEvent: '--'
        };
        this.changeEvent = this.changeEvent.bind(this);
    }
    changeSubtitle(subtitle) {
        this.setState({ subtitle });
    }
    changeEvent(e){
        console.log(e);
        this.setState({currentEvent: e.type})
    }

    render() {
        return (
            <div>
                <h2 >{this.state.title}</h2>
                <h3>{this.state.subtitle}</h3>
                <Section changeSubtitle={this.changeSubtitle.bind(this)} />
                <h4>the event : {this.state.currentEvent}</h4>
                <textarea rows='4' cols='4' onKeyPress={this.changeEvent} />
            </div>
        );
    }
}


