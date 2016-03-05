export default function leaveInfoReducer(leaveInfo = {}, action) {
  switch (action.type) {
    case 'SELECTED_LEAVE_TYPE': {
      return Object.assign({}, leaveInfo, { type: action.leaveType });
    }

    case 'RESELECTED_LEAVE_TYPE': {
      return Object.assign({}, leaveInfo, { type: null });
    }

    case 'ADD_LEAVE_INFO': {
      console.log(action.leaveInfo);
      return leaveInfo;
    }

    default:
      return leaveInfo;
  }
}
