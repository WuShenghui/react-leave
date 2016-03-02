import React, { Component } from 'react'
import render from 'react-dom'
import RequestorInfo from '../components/RequestorInfo'
import LeaveTypeList from '../components/LeaveTypeList'
import LeaveInfo from '../components/LeaveInfo'

export default class App extends Component {
    static defaultProps = {
        types: ["有薪年假", "病假", "補假", "無薪假", "分娩假", "婚假", "恩恤假", "其他"],
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
            isSelectedType: false,
            types: this.props.types,
            requestor: this.props.initialRequestor
        };
    }
    
    selectedType = () => {
        this.setState({
            isSelectedType: true
        })
    };
    
    render() {
        return (
            <div>
                <RequestorInfo requestorInfo={ this.state.requestor } />
                <LeaveTypeList types={ this.state.types } selectedType={ this.selectedType } />
                <LeaveInfo isSelectedType={ this.state.isSelectedType } />
            </div>
        )
    }
}