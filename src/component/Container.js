import React, { Component } from 'react';
import Section from './Section';
export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome',
            subtitle: 'subtitle',
            currentEvent: '--',
            results: [],
        };
        this.changeEvent = this.changeEvent.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((results) => { this.setState({ results: results.map((result => result.username)) }) });
        //tip: let user = fetch... ; console.log(user);    
    }
    changeSubtitle(subtitle) {
        this.setState({ subtitle });
    }
    changeEvent(e) {
        this.setState({ currentEvent: e.type })
    }

    render() {
        return (
            <div>
                <h2 >{this.state.title}</h2>
                <p> {this.state.results.map(result => <li key={result}>{result}</li>)}</p>
                <h3>{this.state.subtitle}</h3>
                <Section changeSubtitle={this.changeSubtitle.bind(this)} />
                <h4>the event : {this.state.currentEvent}</h4>
                <textarea rows='4' cols='4' onKeyPress={this.changeEvent} />
            </div>
        );
    }
}


