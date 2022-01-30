import React, { Component, setState } from 'react';

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    node = null;
    render() {
        return <div ref={
            (node) => {
                this.node = node
                console.log('此时的参数是:', this.node)
            }
        }>
            ref元素节点
            <button onClick={() => this.setState({ num: this.state.num + 1 })}> {this.state.num} </button>
        </div>;
    }
}
// 在commit阶段执行ref
