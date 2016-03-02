import React, { Component } from 'react'
import render from 'react-dom'

export default class LeaveType extends Component {
    constructor(props) {
        super(props);
    }
    
    handleSelected = () => {
        //const { selectedType } = this.props;
        //this.props.selectedType();
    };

    render() {
        return (
            <div className="btn-block">
                <button onClick={ this.handleSelected } ref="name">{ this.props.type }</button>
            </div>
        )
    }
}