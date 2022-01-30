import React from "react";

function HOC(Component) {
    class Wrap extends React.Component {
        render() {
            const { forwardRef, ...otherProps } = this.props;
            return <Component ref={forwardRef} {...otherProps} />
        }
    }

    return React.forwardRef((props, ref) => <Wrap forwardRef={ref} {...props} />)
}

export default HOC;
