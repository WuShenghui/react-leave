import React, { Component } from 'react'
import render from 'react-dom'
import LeaveType from './LeaveType'

export default class LeaveTypeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let typeNodes = this.props.types.map((type) => {
            return (
                <LeaveType key={ type } type = { type } />
            )
        });

        return(
            <div>
                { typeNodes }
            < /div>
        );
    }
}