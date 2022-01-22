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

* #### props应用
    * props定义：1. 在React应用中写的子组件：(1.1 函数组件FunComponent 1.2 类组件 ClassComponent) 2. 父组件绑定在他们标签的属性/方法(特殊的属性ref、key除外)
    * props类型：
        * 1. 子组件渲染数据源（来自父组件的state）
        * 2. 通知父组件的回调函数
        * 3. 单纯的组件传递
        * 4. 渲染函数
        * 5. render渲染函数 和4区别是放在children属性上
        * 6. renderComponent 和3的差别是放在children属性上
    * props通信机制：
        * 父组件的props可以把数据层传递给子组件去渲染消费，另一方面可以通过props中的callback来向父组件传递信息。
    * props更新机制：
        * props可以作为组件是否更新的重要准则，变化即更新，有PureComponent，memo性能优化方案。(TODO:)
    * props插槽：
        * 把组件的闭合标签的插槽转化为Children属性
    * 监听props改变：
        * 类组件中getDerivedStateFromProps监听props改变
        * 函数组件中，useEffect监听props改变
    * props设计模式：
        * props插槽组件，props.children直接渲染, React.cloneElement强化props
        * render props模式
        * 混合模式，组件 + render 
    * props抽象；
        * 混入props
        * 抽离props
    * 注入props
        * 显示注入props
        * 隐式注入props React.cloneElement()
    * props实践：实践体会在组件中。。。

  
 