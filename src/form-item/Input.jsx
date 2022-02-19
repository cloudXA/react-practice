import React from 'react';

const Input = ({ onChange, value }) => {
    return <input 
                type="text" 
                onChange={ (e) => onChange && onChange(e.target.value)} 
                value={value}
            />
};

export default Input;

/**
 * input获取传递的value做响应式处理
 * onChange作为改变本地值，触发最外层的state状态管理
 */