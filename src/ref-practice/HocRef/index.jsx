import React, { useEffect } from 'react';
import HOC from './Hoc';
import Greet from './Greet';


const HocIndex = HOC(Greet);

const Index = () => {
    const node = React.useRef(null);

    useEffect(() => {
        console.log('node.current', node.current);
    }, [])

    return <div>
        <HocIndex ref={node} />
    </div>;
};

export default Index;

/**
 * 通过高阶组件HOC包裹一个原始类组件，给包裹后的组件传递ref,就能够获取被包裹的组件了
 */

// 😂 首页