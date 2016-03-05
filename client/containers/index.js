import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import RequestorInfo from '../components/RequestorInfo'
import LeaveTypeList from '../components/LeaveTypeList'
import LeaveInfo from '../components/LeaveInfo'

class App extends Component {

  render() {

    let leaveNode = this.props.leaveInfo.type
      ? <LeaveInfo leaveInfo={ this.props.leaveInfo } addLeaveInfo= { this.props.actions.addLeaveInfo } reselect= { this.props.actions.reselectLeaveType } /> 
      : <LeaveTypeList types={ this.props.leaveType } leaveInfo={ this.props.leaveInfo } selectedType = { this.props.actions.selectedLeaveType } /> 
        
    return (
      <form>
        <RequestorInfo requestorInfo={ this.props.leaveInfo } />
        { leaveNode }
      < /form>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
