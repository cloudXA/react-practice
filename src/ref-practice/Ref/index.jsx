import React, { Component } from 'react';
import Children from './children';

export default class index extends Component {
  currentDom = null
  currentComponentInstance = null
  innerCurrentDom = React.createRef(null);

  componentDidMount() {
    console.log('currentDom', this.currentDom);
    console.log('currentComponentInstance', this.currentComponentInstance);
    console.log('innerCurrentDOM', this.innerCurrentDom)
  }
  // 1.0 Ref属性是一个函数：
  //     真实DOM创建阶段，执行callback，获取DOM元素或者组件实例，将以灰陶函数第一个参数形式传入
  // 2.0 Ref属性是一个ref对象。
  render() {
    return <div>
        <div ref={ (node) => this.currentDom = node }>
            <Children ref={(node) => this.currentComponentInstance = node}></Children>
            <div ref={this.innerCurrentDom}>
              你好世界
            </div>
        </div>
    </div>;
  }
}
