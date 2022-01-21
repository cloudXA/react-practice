import React, { Component } from 'react';

export default class FormItem extends Component {


    render() {
        const renderChildren = [];
        const { children, handleChange, name, value } = this.props;
        console.log('value', value);

        const onChange = (value) => {
            handleChange(name, value);
        }

        React.Children.forEach(children, (child) => {
            const { name } = child.props;
            const Children = React.cloneElement(child, {
                key: name,
                onChange,
                value: value
            }, child.props.children)

            renderChildren.push(Children);
        })
        return renderChildren;
    }
}

/**
 *  FormItem 获取到由Form组件在其标签传递的属性和方法，做进一步的向下传递
 *  1. onChange包裹handleChange
 *  2. value用于在input的value值
 */

