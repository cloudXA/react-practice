import React, { useEffect } from 'react';
import Index from './index';

const Home = () => {
    const ref = React.useRef(null);

    useEffect(() => {
        console.log('ref.current', ref.current)
    }, [])

    return <div>
        <Index ref={ref} />
    </div>;
};  

export default Home;

/**
 * 1. 通过useRef创建一个ref对象，通过forwardRef将当前ref对象传递给子组件
 * 
 * 2. 向Home组件传递的ref对象上，绑定form孙组件实例，index子组件实例和button DOM元素
 *  
 * forwardRef让ref可以通过props传递，如果用ref对象标记的ref,那么ref就可以通过props的形式，
 * 提供给子孙组件消费，子孙组件也可以改变ref对象里面的属性。
 * */

// 😂 主页