import { combineReducers } from 'redux'
import leaveTypeReducer from './leaveTypeReducer'
import leaveInfoReducer from './leaveInfoReducer'

const rootReducer = combineReducers({
  leaveType: leaveTypeReducer,
  leaveInfo: leaveInfoReducer
})

export default rootReducer
