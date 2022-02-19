import React, { Component } from 'react';

export default class Son extends Component {
    state = {
        fatherMes: '',
        sonMes: ''
    }

    fatherSay = (fatherMes) => this.setState({ fatherMes })

    render() {
        const { fatherMes, sonMes } = this.state;

        return <div className='sonBox'>
            <div className="title">
                子组件
            </div>
            <p>父组件对我说{ fatherMes }</p>
            <div className="label">对父组件说
                <input type="text" onChange={(e) => this.setState({sonMes: e.target.value})} />
            </div>
            <button className="searchBtn" onClick={() => this.props.toFather(sonMes)}>to father</button>
        </div>;
    }
}

