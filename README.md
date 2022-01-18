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
* Component
### state
    * state是异步的原因：batchUpdate批量更新，以及批量更新被打破的条件。
* #### 类组件中的state
    * `setState(obj, callback)`, obj可以是对象；可以是函数返回的对象，`(state, props) => {return {number: 1}}`
    * `setState(obj, callback)`, callback ---> `() => {this.state.number}`
    * setState内部原理更新图![](./images/setState.awebp)
    * 用户通过事件更新state、实现ui交互，React采用事件合成方式，每一个事件都由react事件系统统一调度，![](./images/loop.awebp)
    * 异步操作批量更新规则被打破![](./images/async.awebp)可使用
    ```
    setTimeout(()=>{
        unstable_batchedUpdates(()=>{
            this.setState({ number:this.state.number + 1 })
            console.log(this.state.number)
            this.setState({ number:this.state.number + 1})
            console.log(this.state.number)
            this.setState({ number:this.state.number + 1 })
            console.log(this.state.number) 
        })
    })
    ```
    * 监听state改变或者组件更新在setState的callback中&&componentDidUpdate中。
* #### 函数组件中的state
    * `[state, dispatch] = useState(initData)` state作为提供给ui的数据源
    * `dispatch`改变state的函数，可以理解为推动函数组件渲染的渲染函数。
    * `initData` 1. 非函数-- 最为state初始值。 2. 函数，返回值作为useState初始化的值。
    * `setState`和函数组件`useState`区别
        * 相同点： 两者更新视图，底层都调用了scheduleUpdateOnFiber方法
        * 不同点:
            * 非pureComponent组件下，setState不会浅拷贝两次state，只要调用setState，在没有其他优化手段的前提下，就会执行更新。但useState中的dispatchAction会默认比较两次state是否相同，然后决定是否更新组件。
            * setState有专门监听state变化的回调函数callback,可获取最新的state;函数组件可以通过setNumber(current => current + 1 )方式和useEffect来执行state变化引起的副作用。
            * setState在底层处于逻辑上和老state进行合并处理，而useState更倾向于重新赋值。



  
 