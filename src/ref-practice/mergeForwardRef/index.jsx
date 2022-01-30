import React, { Component } from 'react';
import Form from './Form';

class Index extends Component {
    form = null;
    button = null;

    componentDidMount() {
        const {forwardRef} = this.props;

        forwardRef.current = {
            form: this.form, // 给form组件实例，绑定给ref form属性
            index: this,        // 给index组件实例，绑定为ref index属性
            button: this.button // 给button dom元素，绑定给ref button 属性
        }
    }
    
    render() {
        return <div>
            <button ref={ (button) => this.button = button }>点击</button>
            <Form ref={ (form) => this.form = form }></Form>
        </div>;
    }
}

export default React.forwardRef((props, ref) => <Index {...props} forwardRef={ref}  />)

