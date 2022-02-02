import React, { Component } from 'react';
import { MovieContext } from './movieContext'; // 引入统一的context

export default class MovieList extends Component {
    render() {
        return (
            <MovieContext.Consumer>
                {
                    value => {
                        return <div>{value.map(item => item.name)}</div>
                    }
                }
            </MovieContext.Consumer>
        )
        
    }
}

