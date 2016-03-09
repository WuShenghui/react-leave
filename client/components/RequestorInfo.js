import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class RequestorInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    findDOMNode(this.refs.id).focus();
  }

  render() {
    const { id, company, department, hiredate, name, position } = this.props
    return (
      <div>

        {/* 職員編號 */}
        <div className="col-cus-6 cus-form-group" >
          <label className="col-cus-5" > 職員編號 </label>
          <input type= "text" className= "col-cus-7" placeholder="職員編號" ref="id" { ...id } />
        </div>

        {/* 雜誌/公司 */}
        <div className="col-cus-6 cus-form-group" >
          <label className="col-cus-5" > 雜誌/公司 </label>
          <input type= "text" className= "col-cus-7" placeholder="雜誌/公司" { ...company } />
        </div>

        {/* 部門 */}
        <div className="col-cus-6 cus-form-group" >
          <label className="col-cus-5" > 部門 </label>
          <input type= "text" className= "col-cus-7" placeholder="部門" { ...department } />
        </div>

        {/* 到職日期" */}
        <div className="col-cus-6 cus-form-group" >
          <label className="col-cus-5" > 到職日期 </label>
          <input type= "text" className= "col-cus-7" placeholder="到職日期" { ...hiredate } />
        </div>

        {/* 職員姓名 */}
        <div className="col-cus-6 cus-form-group" >
          <label className="col-cus-5" > 職員姓名 </label>
          <input type= "text" className= "col-cus-7" placeholder="職員姓名" { ...name } />
          {name.touched && name.error && <div className="error">{name.error}</div>}
        </div>

        {/* 職  位 */}
        <div className="col-cus-6 cus-form-group" >
          <label className="col-cus-5" > 職  位 </label>
          <input type= "text" className= "col-cus-7" placeholder="職  位" { ...position } />
        </div>

      </div>
    )
  }
}