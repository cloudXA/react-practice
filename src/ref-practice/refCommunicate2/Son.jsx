import React, { forwardRef, useImperativeHandle } from 'react';
function Son(props, ref) {
    const inputRef = React.useRef(null);
    const [inputValue, setInputValue] = React.useState('');
    const toLearn = [{ type: 1, mes: 'english'}, {type: 2, mes: 'react'}]
    const typeInfo = React.useRef(toLearn[0]);

    useImperativeHandle(
        ref,
      () => {
        const handleRefs = {
            onfocus() { // 用于聚焦input输入框
                inputRef.current.focus();
            },

            onChangeValue(value) { // 用于改变input值
                setInputValue(value);
            }
        }
        return handleRefs
      },
      []
    );
    
    const changeType = (info)=> {
        if(typeInfo.current.type === info.type) {
            alert(info.type)
            typeInfo.current = info
        }
    }

    return <div>
        <input type="text" placeholder='请输入内容' ref={inputRef} value={inputValue} />
        {
            toLearn.map(item => <button key={item.type} onClick={changeType.bind(null, item)}>{item.mes}</button>)
        }
    </div>;
}

export default forwardRef(Son);

/**
 * 函数组件接受父级ref的实践方式
 * 子组件 Son 用 useImperativeHandle 接收父组件 ref，将让 input 聚焦的方法 onFocus 和 改变 input 输入框的值的方法 onChangeValue 传递给 ref 。
 *  父组件可以通过调用 ref 下的 onFocus 和 onChangeValue 控制子组件中 input 赋值和聚焦。
 *  父组件用 ref 标记子组件，由于子组件 Son 是函数组件没有实例，所以用 forwardRef 转发 ref。
 * 
 *  用一个useRef保存type信息，type改变不需要视图变化
 *  按钮切换直接改变useRef内容
 *  useEffect里面可以直接访问到改变后的typeInfo的内容，不需要添加依赖项
 * 
 * */