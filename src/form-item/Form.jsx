import React, { Children, Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '彰显',
                password: '123'
            }
        }

        this.submitForm = this.submitForm.bind(this);
        this.setValue = this.setValue.bind(this)

    }
    /**
     * 用于提交表单数据
     * @param {*} cb 
     */
    submitForm(cb) {
        cb({ ...this.state.formData })
    }
    /**
     * 设置表单数据层
     */
    setValue(name, value) {
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        })

    }

    /**
     * 重置表单数据
     */
    resetForm() {

        Object.keys(this.state.formData).forEach((key, index) => {
            this.state.formData[key] = ''
        })

        this.setState({
            ...this.state.formData
        })

    }

    render() {
        const renderChildren = [];
        const { children } = this.props; 
        React.Children.forEach(children, (child) => {
            // child指的是formItem 
            const { name } = child.props;
            const Children = React.cloneElement(child, {
                key: name,
                name,
                value: this.state.formData?.[name] || '',
                handleChange: this.setValue
            }, child.props.children)

            renderChildren.push(Children);

        })
        return renderChildren;
    }
}

/**
 *  在Form组件内部维护了一套state状态
 *      1. 声明state状态
 *      2. setState改变state状态
 *      3. state数据流自顶向下流动, Form ---> FormItem  ---> Input ----> input（h5）value
 *  实例有一些方法：
 *      1. submitForm --- 接受一个callback，将state状态回传给调用者
 *      2. setValue ---- 用于改变state状态值
 *      3. resetForm  ---- 用于重置state状态值
 *  解决组件嵌套问题：
 *      1. props.children作为嵌套的组件和元素集合
 *      2. React.Children.forEach()可以作为批量处理组件，添加属性值等等
 *          2.1. 添加属性有state基于formItem属性名对应的值
 *          2.1. 添加方法名，用于内部向外改变state状态
 *      3. React.cloneElement(child, {name: value}, child.props.children) 使用深拷贝添加属性、嵌套的标签与组件
 * 
 */
