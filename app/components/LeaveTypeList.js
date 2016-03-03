import React, { Component } from 'react'
import render from 'react-dom'
import LeaveType from './LeaveType'

export default class LeaveTypeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { types, selectedType } = this.props;
        
        let typeNodes = types.map((type) => {
            return (
                <LeaveType key={ type } type={ type } selectedType={ selectedType.bind(null, type) } />
            )
        });

        return(
            <div>
                { typeNodes }
            < /div>
        );
    }
}