import React, { Component } from 'react'
import render from 'react-dom'
import RequestorInfo from '../components/RequestorInfo'
import LeaveTypeList from '../components/LeaveTypeList'
import LeaveInfo from '../components/LeaveInfo'

export default class App extends Component {
    static defaultProps = {
        types: ["有薪年假", "病假", "補假", "無薪假", "分娩假", "婚假", "恩恤假", "其他"],
        leaveType: {
            type: '',
            isSelected: false
        },
        initialRequestor: {
            id: '',
            company: '',
            department: '',
            hiredate: '',
            name: '',
            position: ''
        }
    };
    
    constructor(props) {
        super(props);

        this.state = {
            leaveType: this.props.leaveType,
            types: this.props.types,
            requestor: this.props.initialRequestor
        };
    }
    
    selectedType = (type) => {
        this.setState({
            leaveType: {
                type: type,
                isSelected: true
            }
        })
    };
    
    reselect = () => {
        this.setState({
            leaveType: {
                type: '',
                isSelected: false
            }
        })
    };
    
    render() {
        let leaveNode = this.state.leaveType.isSelected
                            ? <LeaveInfo leaveType={ this.state.leaveType } reselect={ this.reselect } /> 
                            : <LeaveTypeList types={ this.state.types } selectedType={ this.selectedType } /> 
        
        return (
            <div>
                <RequestorInfo requestorInfo={ this.state.requestor } />
                { leaveNode }            
            </div>
        )
    }
}