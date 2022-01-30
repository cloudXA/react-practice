import React from 'react';
import Son from './Son';

export default function Father() {
    const [ sonMes, setSonMes ] = React.useState('');
    const [ fatherMes, setFatherMes ] = React.useState('');
    const sonInstance = React.useRef(null); // 获取子组件实例
    const toSon = ()=> sonInstance.current.fatherSay(fatherMes); // 调用子组件实例方法，改变子组件state
    
    return <div className='box'>
        <div className="title">父组件</div>
        <p>子组件对我说: { sonMes }</p>
        <div className="label">对子组件说</div>
        <input type="text" onChange={ (e) => setFatherMes(e.target.value)} />
        <button className='searchBtn' onClick={toSon}>to son</button>
        <Son ref={sonInstance} toFather={setSonMes}></Son>
    </div>;
}

/**
 * 以父组件作为视角：
 *  state结构有sonMes、fatherMes两种
 *  sonMes作为子组件通过set传递而来的渲染，通过引入子组件，by props传递,在子组件中调用setState方式
 *  fatherMes为本组件state，通过对子组件引用ref,调用子组件set函数，传递父组件的值给子组件。
 *  
 */