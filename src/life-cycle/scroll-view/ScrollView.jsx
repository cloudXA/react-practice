import React, { Component, createRef } from 'react';
import Item from './item';

export default class ScrollView extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.ref = createRef(null);
    this.id = null;
    this.handleScroll = this.handleScroll.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
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

  componentDidUpdate(prevProps, prevState, snapShot) {
    if(this.props?.unBound) {
      this.removeEvent();
    }
  }

  componentDidMount() {
    this.id = this.ref.current.addEventListener('scroll', this.handleScroll)
  } 

  render() {
    const { docs, page, pageCount } = this.props?.data;
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
            docs?.map((item,index) => <Item key={index} name={item.name} description={item.description} url={item.url} />)
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
 */