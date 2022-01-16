import React, { Component } from 'react'
import TextComponent from './TextComponent'
import PropTypes from 'prop-types'

export default class JsxPractice extends Component {
    status = false
    renderFoot = () => <div> I am footer </div>
    toLearn = ['react', 'vue', 'angular']


    controlRender = () => {
        const reactElement = (
            <div style={{ marginTop:'100px' }} className="container" >
                 { /* element 元素类型 */ }
                <div>hello,world</div>  
                { /* fragment 类型 */ }
                <React.Fragment>      
                    <div> 👽👽 </div>
                </React.Fragment>
                { /* text 文本类型 */ }
                my name is alien       
                { /* 数组节点类型 */ }
                { this.toLearn.map(item=> <div key={item} >let us learn { item } </div> ) } 
                { /* 组件类型 */ }
                <TextComponent/>  
                { /* 三元运算 */  }
                { this.status ? <TextComponent /> :  <div>三元运算</div> }  
                { /* 函数执行 */ } 
                { this.renderFoot() }  
                <button onClick={ ()=> console.log( this.render() ) } >打印render后的内容</button>
            </div>
        )
        console.log(reactElement.props.children, 'react ')
        const { children } = reactElement.props;
        /**
         * 1. children扁平化处理
         */
         const newElement = reactElement.props.children.reduce((current, pre) => {
            if(Array.isArray(pre)) {
                return current.concat(pre)
            } 
            current.push(pre)
            return current;
         }, [])

         const flatChildren = React.Children.toArray(children);

         /**
         * 2. 干掉children中文本类型节点
         */
        const temElement = newElement.reduce((current, pre) => {
            if(typeof pre === 'string') {
                return current
            } 
            current.push(pre)
            return current;
         }, [])


         const newChildren = [];
         React.Children.forEach(flatChildren, (item) => {
             if(React.isValidElement(item)) newChildren.push(item)
         })


         /**
          * 3. 向children最后插入say goodbye 元素
          */
         const sayGoodbye = React.createElement('div', null, 'goodbye')
         temElement.push(sayGoodbye);


         const lastChildren = React.createElement('div', { className: 'last' }, 'goodbye')
         newChildren.push(lastChildren);

         /**
          * 4. 克隆新的元素节点并渲染
          */
         

        //  console.log(temElement, 'tem')
        //  将newChildren插入到reactElement的props中
         const newReactElement = React.cloneElement(reactElement, {}, ...newChildren)


        return newReactElement;
    }
    render() {
        return (
            <div>
                { this.controlRender() }
            </div>
        )
    }
}

/**
 * jsx编译后结构认识，对jsx编译后的react.element进行一系列操作，达到理想化的目的，熟悉react api使用
 * 1. 将children扁平化处理，将数组类型的子节点打开；
 *       const flatChildren = React.Children.toArray(children);
 * 2. 干掉children中文本类型节点
 *       const newChildren = [];
         React.Children.forEach(flatChildren, (item) => {
             if(React.isValidElement(item)) newChildren.push(item)
         })
 * 3. 向children最后插入say goodbye 元素
         const lastChildren = React.createElement('div', { className: 'last' }, 'goodbye')
         newChildren.push(lastChildren);
 * 4. 克隆新的元素节点并渲染
         //  将newChildren插入到reactElement的props中
         const newReactElement = React.cloneElement(reactElement, {}, ...newChildren)
 * 
 * 
 */
