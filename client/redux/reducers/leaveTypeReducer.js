export default function leaveTypeReducer(leaveType = [], action) {
  switch (action.type) {
    case 'GET_LEAVE_TYPE_SUCCESS': {
      return action.types.slice();
    }

    default:
      return leaveType;
  }
}
