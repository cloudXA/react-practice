import React, { Component } from 'react';
import Son from './Son';

export default class Father extends Component {
    cur = null;
    handleClick() {
        console.log(this.cur, 'this.cur')
        const { onfocus, onChangeValue } = this.cur;
        
        onfocus();
        onChangeValue("let's dance")
    }
    render() {
        return <div>
            <Son ref={cur => (this.cur = cur)} />
            <button onClick={this.handleClick.bind(this)}>father </button>
        </div>;
    }
}
