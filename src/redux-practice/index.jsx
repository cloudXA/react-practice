import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import store from '../index';
import { connect } from 'react-redux';

const ReducePractice = props => {
  const [state, changeState] = useState(store.getState());

  // useEffect(() => {
  //   const unSubscribe = store.subscribe(() => {
  //     changeState(store.getState())
  //   })
  //   return () => {
  //     return unSubscribe()
  //   };
  // }, []);

  const { info, number, addLike, setTitle } = props;



  return (
    <div>
      {number}
      <p>{info.name ? 'hello, my name is ' + info.name : 'what is your name'} { info.mes ? info.mes : 'what do you say?'} <br /></p>

      《React进阶实践指南》 👍{number}<br />

      

      <button onClick={() => { return addLike()}}>点赞</button>
      <button onClick={() => { return setTitle('let us learn react ')}}>修改标题</button>
    </div>
  )
}

ReducePractice.propTypes = {}

const mapStateToProps = state => ({ number: state.number, info: state.info })

const mapDispatchToProps = dispatch => ({ addLike: () => dispatch({ type: 'ADD' }), setTitle: (mes) => dispatch({ type: 'SET', payload: { mes: mes }})})

export default connect(mapStateToProps, mapDispatchToProps)(ReducePractice)

/**
 * mapStateToProps替代了redux的subscribe
 */

/** 
 * store：存在 dispatch  getState replaceReducer subscribe 
 * react-redux: 
 * 存在 connect：
 * connect(mapStateToProps?, mapDispatchToProps?, mergeProps?,options?)
 * 1. mapStateToProps 2. mapDispatchToProps 3. mergeProps 4. options
 *    1. const mapStateToProps = state => ({ number: state.number }) 
 *    将redux中的dispatch方法，映射到业务组件的props中（在具体业务组件可以直接使用numberAdd、setInfo方法实现dispatch(action)通过reducer改变state）
 *    2. const mapDispatchToProps = dispatch => {
 *            return {
 *                  numberAdd: () => dispatch({ type: 'ADD' }),
 *                  setInfo: () => dispatch({ type: 'SET' })     
 *             }
 *       }
 *    3. (stateProps, dispatchProps, ownProps) => Object返回的对象 { ...ownProps, ...stateProps, ...dispatchProps}
 *    4. options
 *      {
 *          context?: Object,   // 自定义上下文
            pure?: boolean, // 默认为 true , 当为 true 的时候 ，除了 mapStateToProps 和 props ,其他输入或者state 改变，均不会更新组件。
            areStatesEqual?: Function, // 当pure true , 比较引进store 中state值 是否和之前相等。 (next: Object, prev: Object) => boolean
            areOwnPropsEqual?: Function, // 当pure true , 比较 props 值, 是否和之前相等。 (next: Object, prev: Object) => boolean
            areStatePropsEqual?: Function, // 当pure true , 比较 mapStateToProps 后的值 是否和之前相等。  (next: Object, prev: Object) => boolean
            areMergedPropsEqual?: Function, // 当 pure 为 true 时， 比较 经过 mergeProps 合并后的值 ， 是否与之前等  (next: Object, prev: Object) => boolean
            forwardRef?: boolean, //当为true 时候,可以通过ref 获取被connect包裹的组件实例。
 *      }
 *                
 * dispatch(action) action 为对象，结构为{ type: 'ADD', payload: {num: 1} }
 * reducer(state, action) ----> reducer接受action，根据action的type，对应处理state状态。同时存在多个 reducer分片(state)
 * 
*/