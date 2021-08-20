import React, { Component } from 'react';

function createWarning(funcName){
    console.log(funcName + " not Defined");
}
const defaultProps = {
    onPlus: createWarning("onPlus"),
    onSubtract: createWarning("onSubtract"),
    onRandom: createWarning("onRandom")
};

class Control extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandom}>random</button>
            </div>
        );
    }
}

Control.defaultProps = defaultProps;

export default Control;