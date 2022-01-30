import React, { Component, forwardRef } from 'react';
import Son from './Son';

class Father extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props, 'props.grandRef')

        return <div>
            <Son grandRef={this.props.grandRef}></Son>
        </div>;
    }
}

// forwardRef把ref变成了可以通过props传递和转发 
export default React.forwardRef((props, ref) => <Father grandRef={ref} {...props} />)

/**
 * 😊跨层级获取
 * forwardRef解决ref不能跨层级捕获和传递的问题，forwardRef接受父级元素标记的ref信息，
 * 并把它转发下去，是的子组件可以通过props来接受到上一层级或者更上层级的ref
 */