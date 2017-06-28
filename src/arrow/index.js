/**
 * @param {String} direction 方向
 * 
 */

import React, {Component} from 'react';
require('./index.css');

export default class Arrow extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            direction: 'down'
        }
        this.toggleArrow = this.toggleArrow.bind(this);
    }

    toggleArrow() {
        if (this.state.direction === 'up'){
            this.setState({
                direction: 'down'
            });
            this.props.onPullBack && this.props.onPullBack();
        }
        else if (this.state.direction === 'down'){
            this.setState({
                direction: 'up'
            });
            this.props.onExpand && this.props.onExpand();
        }
    }

    render() {
        let isExpand = this.state.direction === 'up';
        return(
            <div onClick = {this.toggleArrow} className = {isExpand ? 'arrow arrow_up' : 'arrow arrow_down'}></div>
        )
    }

    


}