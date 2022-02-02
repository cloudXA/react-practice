import React, { useContext, Component } from 'react';
import { MovieContext } from './movieContext'; // 引入统一的context


export default function MovieList() {
    const value = useContext(MovieContext);
    return (
        <div>
            {
                value.map(item => item.name)
            }
        </div>
    );
}
