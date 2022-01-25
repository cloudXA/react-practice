import React, { Component, createRef } from 'react';
import Item from './item';

export default class ScrollView extends Component {
  // 1. 执行初始化
  constructor(props) {
    super(props)
    this.state = {
      docs: [],
      test: 'hi'
    }
    this.ref = createRef(null);
    this.id = null;
    this.handleScroll = this.handleScroll.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }

  // 2. 接受props, 返回的值合并到state (从props获取派生的) 😊 在props更新后执行 4.
  static getDerivedStateFromProps(newProps) {
    const { data } = newProps;
    return {
      docs: data.docs || [],
      isBound: data.unBound || false
    }
  }


  // 2. componentWillMount() {} 如果存在getDerivedStateFromProps、getSnapshotBeforeUpdate 就不会执行componentWillMount 😊 在props更新后执行 4.

  // 😊5. 性能优化，只有列表数据变化，渲染列表  ---> 返回值决定是否继续执行 render 函数，调和子节点  ---> getDerivedStateFromProps 的返回值可以作为新的 state ，传递给 shouldComponentUpdate 。
  shouldComponentUpdate(newProps, newState) {
    console.log(newProps, 'newProps')
    return newState.docs !== this.state.docs || newProps.unBound !== this.state.isBound
  }

  // 😊8. 获取更新前容器高度
  getSnapshotBeforeUpdate() {
    console.log(this.state)
    console.log('getSnapshotBeforeUpdate', this.ref.current.scrollHeight)
    return this.ref.current.scrollHeight
  }

  // componentWillReceiveProps 如果存在getDerivedStateFromProps 就不执行componentWillReceiveProps

  // 😊6. componentWillUpdate()

  // 😊9.
  // 获取更新后容器高度, 在render函数执行之后执行
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, 'preVProps')
    console.log('snapshot', snapshot)
    console.log('scrollView容器高度变化', this.ref.current.scrollHeight - snapshot);
    if(this.props?.unBound) {
      this.removeEvent();
    }
  }

  // 😊10. 绑定事件监听器
  componentDidMount() {
    this.id = this.ref.current.addEventListener('scroll', this.handleScroll)
  }

  // 解除事件监听器
  componentWillUnmount() {
    this.ref.current.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll(e) {
    const { scrollToLower } = this.props;
    const { docs, page, pageCount } = this.props?.data;
    const { scrollTop, offsetHeight, scrollHeight } = e.target;
    if (scrollTop + offsetHeight == scrollHeight) {
      scrollToLower(page);
    }
  }

  removeEvent() {
    this.ref.current.removeEventListener('scroll', this.handleScroll);
  }

  // componentDidUpdate(prevProps, prevState, snapShot) {
  //   if(this.props?.unBound) {
  //     this.removeEvent();
  //   }
  // }

  // 3. 执行render  😊7.再次执行render
  render() {
    const { page, pageCount } = this.props?.data;

    const { docs } = this.state;
    const { item } = this.props;
    
    return <div>
      <div className='container' 
          style={{ 
            height: '500px', 
            overflow: 'auto'
          }}
          ref={this.ref}
        >
        <div className='items' >
          {
            docs?.map((ele) => {
                console.log(React.createElement(item, { ele, key: ele._id }))
                return React.createElement(item, { ele, key: ele._id }) // 渲染Item列表内容
            })
            
          }
        </div>
      </div>
    </div>;
  }
}

/**
 * 1. 接受data
 * 2. 接受纯渲染单元组件
 * 3. 接受函数，通知子滚动最底层父加载第二层数据
 *  3.1 dom渲染完成阶段获取对items的获取
 *  3.2 dom渲染阶段完成对items的事件监听
 * 
 * 执行过程分为两个一个没有表情代表初始化和初次渲染
 *        😊 代表组件因为props或者别的方式发生更新阶段
 */