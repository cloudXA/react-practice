import React, { Component } from 'react';

export default class Greet extends Component {
    constructor(props) {
        super(props)
        this.state= {
            data: []
        }
    }
    render() {
        return <div>hello, world</div>;
    }
}
