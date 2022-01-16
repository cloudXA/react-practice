import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}
