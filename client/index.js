import './css/main.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers'
import configureStore from './redux/store'

let initialState = {
  leaveType: ["有薪年假", "病假", "補假", "無薪假", "分娩假", "婚假", "恩恤假", "其他"],
  leaveInfo: {
    id: '',
    company: '',
    department: '',
    hiredate: '',
    name: '',
    position: '',
    type: null,
    beginDate: '',
    beginPeriod: '',
    endDate: '',
    endPeriod: '',
    total: 0,
    cause: ''
  }
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
)
