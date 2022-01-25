import React, { useEffect, useState } from "react";

const FunctionLifecycle = (props) => {
    const [ num, setNum ] = useState(0);

    useEffect(() => {
        // 1. 请求数据 2. 事件监听 3. 操纵dom 4. 增加定时器 5. 延时器
        console.log('组件挂载完成: componentDidMount')
        return function componentWillUnmount() {
            // 1. 解除事件监听器 2. 清除组件
            console.log('组件销毁结算: componentWillUnmount')
        }
    }, [])


    useEffect(() => {
        console.log(props, 'props--componentWillReceiveProps')
        console.log(num, 'state --componentWillReceiveProps')
        console.log('props变化: componentWillReceiveProps')
    }, [props.numbers])

    useEffect(() => {
        console.log(props, 'props --componentDidUpdate')
        console.log(num, 'state --componentDidUpdate')
        console.log('组件更新完成: componentDidUpdate')
    })

    return <div>
        <div>
            props: { props.number }  
        </div>
        <div>
            states: { num }
        </div>
        <button onClick={() => setNum(current => current + 1)}>increase</button>
    </div>;
};

export default FunctionLifecycle;

/**
 * 一：以空数组作为依赖模拟componentDidMount、返回的函数模拟componentWillUnmount
 * 
 * 二：从模拟生命周期阶段使用排列组合方式对特性观察
 *  1. 仅改变外部props number
 *      1.1 useEffect以props作为依赖
 *          * 1. componentDidUpdate改变, componentWillReceiveProps改变
 *      1.2 useEffect不以props作为依赖
 *          * 1. componentDidUpdate改变, 模拟的无效
 *  2. 仅改变内部state: num
 *      * componentDidUpdate改变, componentWillReceiveProps不改变
 *  
 * 
 */