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
    this.props.actions.addLeaveInfo(data);
  };

  render() {
    const { fields } = this.props;

    let leaveNode = this.props.leaveInfo.type
      ? (
        <div>
          <LeaveInfo
            { ...fields }
            leaveInfo={ this.props.leaveInfo }
            addLeaveInfo= { this.props.actions.addLeaveInfo }
            reselect= { this.props.actions.reselectLeaveType } />
          <button className="btnSubmit">提交</button>
        </div>
      ) : (
        <LeaveTypeList
          types={ this.props.leaveType }
          leaveInfo={ this.props.leaveInfo }
          selectedType = { this.props.actions.selectedLeaveType } />
      )

    return (
      <form onSubmit={ this.props.handleSubmit(this.handleSubmit) }>
        <RequestorInfo { ...fields } />
        { leaveNode }
      </form>
    )
  }
}

const fields = [
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
];

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  // ...

  return errors;
};

LeaveForm = reduxForm({
  form: 'leave',
  fields,
  validate
})(LeaveForm);

export default LeaveForm
