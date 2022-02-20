import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const ComponentCommunicate = props => {
    const { toCompB, compBsay, compAsay, toCompA } = props;
    const [CompAsay, setCompAsay] = useState('');
    const [CompBsay, setCompBsay] = useState('');

    return (
        <div>ComponentCommunicate

            <div className="box" style={{ border: '1px solid green'}}>
                <p>我是组件A</p>
                <div> B组件对我说：{compBsay} </div>
                    我对B组件说：<input placeholder="CompAsay" onChange={(e) => setCompAsay(e.target.value)} />
                <button onClick={() => toCompB(CompAsay)} >确定</button>
            </div>

            <div className="box" style={{ border: '1px solid pink'}}>
                <p>我是组件B</p>
                <div> A组件对我说：{ compAsay } </div>
                我对A组件说：<input placeholder="CompBsay" onChange={(e)=> setCompBsay({ CompBsay: e.target.value  }) }  />
                <button  onClick={() => toCompA()} >确定</button>
            </div>

        </div>
    )
}

ComponentCommunicate.propTypes = {}

const CompBMapStateToProps = state => ({ compBsay: state.b.compBsay, compAsay: state.a.compAsay })

const CompAmapDispatchToProps = dispatch => ( { toCompB: (mes) => dispatch({ type: 'SETA', payload: { compAsay: mes }}), toCompA: (mes) => dispatch({ type: 'SETB', payload: { compBsay: mes }})})

export default connect(CompBMapStateToProps, CompAmapDispatchToProps)(ComponentCommunicate)