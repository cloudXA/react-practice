import React, { Component } from 'react';
import Father from './Father';

export default class GrandFather extends Component {
    constructor(props) {
        super(props);
    }
    node = null;
    componentDidMount() {
        console.log('grandFather想要获取的元素',this.node);
    }
    render() {
        return <div>
            <Father ref={(node) => this.node = node} properties='hello' />
        </div>;
    }
}

// 😂 被展示页