### react元素编译后的节点管理
* jsx编译后结构认识，对jsx编译后的react.element进行一系列操作，达到理想化的目的，熟悉react api使用
    * 1. 将children扁平化处理，将数组类型的子节点打开；
        const flatChildren = React.Children.toArray(children);
    * 2. 干掉children中文本类型节点
        const newChildren = [];
       React.Children.forEach(flatChildren, (item) => {
           if(React.isValidElement(item)) newChildren.push(item)
       })
    * 3. 向children最后插入say goodbye 元素
       const lastChildren = React.createElement('div', { className: 'last' }, 'goodbye')
       newChildren.push(lastChildren);
    * 4. 克隆新的元素节点并渲染
       //  将newChildren插入到reactElement的props中
       const newReactElement = React.cloneElement(reactElement, {}, ...newChildren)

  
 