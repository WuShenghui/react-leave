import React, { Component } from 'react'
import render from 'react-dom'

export default class LeaveType extends Component {
    constructor(props) {
        super(props);
    }
    
    handleSelected = () => {
        const { type, selectedType } = this.props;
        selectedType(type);
    };

    render() {
        return (
            <div className="btn-block">
                <button onClick={ this.handleSelected } ref="name">{ this.props.type }</button>
            </div>
        )
    }
}