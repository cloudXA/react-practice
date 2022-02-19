import React, { useState } from "react";
import FunctionLifecycle from "./FunctionLifecycle";

const Index = () => {
    const [ number, setNumber ] = useState(0);
    const [ isRender, setIsRender ] = useState(true);

    const destroyFnLifecycle = () => {
        setIsRender(current => !current);
    }
    return <div>
            { isRender && <FunctionLifecycle number={number} /> }
            <br />
            <button onClick={destroyFnLifecycle}>
                { !isRender ? '激活组件' : '销毁组件'} 
            </button>
            <button onClick={() => setNumber(current => current + 1)}>
                改变props 
            </button>
        </div>
};

export default Index;
