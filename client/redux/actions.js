import fetch from 'isomorphic-fetch'

function parseJSON(response) {
  return response.json()
}

function handleApiError(error) {
  console.log('request failed', error)
}

function getLeaveTypeSucess(types) {
  return {
    type: 'GET_LEAVE_TYPE_SUCCESS',
    types: types
  }
}

export function selectedLeaveType(leaveType) {
  return {
    type: 'SELECTED_LEAVE_TYPE',
    leaveType: leaveType
  }
}

export function reselectLeaveType() {
  return {
    type: 'RESELECTED_LEAVE_TYPE'
  }
}

export function addLeaveInfo(leaveInfo) {
  return {
    type: 'ADD_LEAVE_INFO',
    leaveInfo: leaveInfo
  }
}

export function getLeaveType() {
  return (dispatch, getState) => {
    fetch('http://localhost:8080/leaveType', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(parseJSON)
      .then(res => {
        dispatch(getLeaveTypeSucess(res.data));
      })
      .catch(handleApiError);
  }
}
