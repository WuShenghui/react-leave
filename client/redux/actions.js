let actions = {
  selectedLeaveType: function (leaveType) {
    return {
      type: 'SELECTED_LEAVE_TYPE',
      leaveType: leaveType
    }
  },
  reselectLeaveType: function () {
    return {
      type: 'RESELECTED_LEAVE_TYPE'
    }
  },
  addLeaveInfo: function (leaveInfo) {
    return {
      type: 'ADD_LEAVE_INFO',
      leaveInfo: leaveInfo
    }
  }
}

export default actions
