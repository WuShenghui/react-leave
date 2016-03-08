import React, { Component } from 'react'
import render from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import LeaveForm from './LeaveForm'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <LeaveForm />
      </Provider>
    )
  }
}
