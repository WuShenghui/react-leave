import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import leaveTypeReducer from './leaveTypeReducer'
import leaveInfoReducer from './leaveInfoReducer'

const rootReducer = combineReducers({
  form: formReducer,
  leaveType: leaveTypeReducer,
  leaveInfo: leaveInfoReducer
})

export default rootReducer
