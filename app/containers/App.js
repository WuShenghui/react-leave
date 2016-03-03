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
        },
        initialLeaveInfo: {
            beginDate: '',
            beginPeriod: '',
            endDate: '',
            endPeriod: '',
            total: 0,
            cause: ''
        }
    };
    
    constructor(props) {
        super(props);

        this.state = {
            leaveType: this.props.leaveType,
            types: this.props.types,
            requestor: this.props.initialRequestor,
            leaveInfo: this.props.initialLeaveInfo
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
    
    addLeaveInfo = (info) => {
        console.log(Object.assign({}, info, this.state.requestor));
    };
    
    render() {
        let leaveNode = this.state.leaveType.isSelected
                            ? <LeaveInfo leaveType={ this.state.leaveType } addLeaveInfo={ this.addLeaveInfo } reselect={ this.reselect } /> 
                            : <LeaveTypeList types={ this.state.types } selectedType={ this.selectedType } /> 
        
        return (
            <form>
                <RequestorInfo requestorInfo={ this.state.requestor } />
                { leaveNode }            
            </form>
        )
    }
}