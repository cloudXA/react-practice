import React from 'react';

export default function Son(props) {
    const { grandRef } = props;

    return <div>
        <div> I am alien</div>
        <span ref={grandRef}>想要获取的元素</span>
    </div>;
}
