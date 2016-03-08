import React, { Component } from 'react'
import render from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as actions from '../redux/actions'
import RequestorInfo from '../components/RequestorInfo'
import LeaveTypeList from '../components/LeaveTypeList'
import LeaveInfo from '../components/LeaveInfo'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)

class LeaveForm extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.actions.getLeaveType) {
      this.props.actions.getLeaveType()
    }
  }

  handleSubmit = (data) => {
    console.log('handle submit..' + data);
  };

  render() {
    let leaveNode = this.props.leaveInfo.type
      ? (
        <div>
          <LeaveInfo
            leaveInfo={ this.props.leaveInfo }
            addLeaveInfo= { this.props.actions.addLeaveInfo }
            reselect= { this.props.actions.reselectLeaveType } />
          <button className="detailSubmit">提交</button>
        </div>
      ) : (
        <LeaveTypeList
          types={ this.props.leaveType }
          leaveInfo={ this.props.leaveInfo }
          selectedType = { this.props.actions.selectedLeaveType } />
      )

    return (
      <form onSubmit={ this.handleSubmit }>
        <RequestorInfo requestorInfo={ this.props.leaveInfo } />
        { leaveNode }
      </form>
    )
  }
}

LeaveForm = reduxForm({
  form: 'leave',
  fields: [
    'id',
    'company',
    'department',
    'hiredate',
    'name',
    'position',
    'type',
    'beginDate',
    'beginPeriod',
    'endDate',
    'endPeriod',
    'total',
    'cause'
  ]
})(LeaveForm)

export default LeaveForm
