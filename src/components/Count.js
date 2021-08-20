import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';

import * as actions from '../actions'

class Count extends Component {

    constructor(props) {
        super(props);

        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }
        return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandom={this.setRandomColor}
                />
            </div>
        );
    }
}

// redux store의 값을 return 받는다.
const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color : state.ui.color
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
         handleIncrement: () => {dispatch(actions.increment())},
         handleDecrement: () => {dispatch(actions.decrement())},
         handleSetColor: (color) => {dispatch(actions.setColor(color))}
     }
}

//리액트 앱의 하위 컴포넌트에서 redux store(=../reducers/index.js)를 접근하는 것을 가능하게 해주는 역할
export default connect(mapStateToProps, mapDispatchToProps)(Count);