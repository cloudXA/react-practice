import React, { Component } from 'react'

export default class TextComponent extends Component {
    /**
     * 
     * @param {*} props 
     * 绑定props属性是在Component中，执行super函数=== 执行Componet函数，需要给constructor()或者super()传递props,
     * 那么在constructor的上下文就能获取组件的各种属性了。
     * 
     * 执行react底层Component函数
     */
    constructor(props) {
        super(props);
        console.log(this)
    }   

    handleClick = () => console.log('hi')

    // 对于类组件来说，底层只需要实例化一次，实例中保存了组件的 state 等状态。
    //  对于每一次更新只需要调用 render 方法以及对应的生命周期就可以了。

    render() {
        console.log(this, 'props')
        return (
            <div onClick={this.handleClick}>
                hello world
            </div>
        )
    }
}
