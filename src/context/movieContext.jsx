import React, { createContext, useState } from 'react';
// import MovieList from './movieListFn';    // 函数式context用法
import MovieList from './movieListClass';    // 组件式context用法
export const MovieContext = createContext(); // 导出统一的context

export default function MovieProvider(props) {
    const [movies, setMovies] = useState([
        {
            name: '奇迹',
            price: '$120'
        },
        {
            name: '长风',
            price: '$52'
        }
    ]);

    return (
        <MovieContext.Provider value={movies}>
            <MovieList />
        </MovieContext.Provider>
    );
}

// 😊 context使用两种方式
// 相同定义：Provider 
// 在消费者引入Provider fn 使用useContext  class 使用 Consumer方式