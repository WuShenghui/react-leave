import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class LeaveInfo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   beginDate: '',
    //   beginPeriod: 'am',
    //   endDate: '',
    //   endPeriod: 'pm',
    //   total: 0,
    //   cause: ''
    // };
  }

  componentDidMount() {
    findDOMNode(this.refs.beginDate).focus();
  }

  handleReselect = () => {
    this.props.reselect();
  };

  render() {
    const { beginDate, beginPeriod, endDate, endPeriod, total, cause } = this.props;

    return (
      <div className="detailForm">

        {/* 重新選擇 */}
        <div className="row detailStatus">
          <span className="col-cus-9">
            <input type="button" value={ this.props.leaveInfo.type } />
          </span>
          <a className="col-cus-3" href="#" onClick={ this.handleReselect } data-flag="true" sendFlagAction="">重新選擇</a>
        </div>

        {/* Form */}
        <div className="row">

          {/* 開始日期 */}
          <div className="col-cus-6 cus-form-group">
            <label className="col-cus-5">開始日期</label>
            <input type="text" className="col-cus-7" placeholder="開始日期" ref="beginDate" { ...beginDate } />
          </div>

          {/* 班次 */}
          <div className="col-cus-6 cus-form-group">
            <label className="col-cus-5">班次</label>
            <select name="" id="" className="col-cus-7" { ...beginPeriod }>
              <option value="am">上午</option>
              <option value="pm">下午</option>
            </select>
          </div>

          {/* 結束日期 */}
          <div className="col-cus-6 cus-form-group">
            <label className="col-cus-5">結束日期</label>
            <input type="text" className="col-cus-7" placeholder="結束日期" { ...endDate } />
          </div>

          {/* 班次 */}
          <div className="col-cus-6 cus-form-group">
            <label className="col-cus-5">班次</label>
            <select name="" id="" className="col-cus-7" { ...endPeriod }>
              <option value="am">上午</option>
              <option value="pm">下午</option>
            </select>
          </div>
        </div>

        {/* 共 計 */}
        <div className="row">
          <div className="col-cus-6 cus-form-group">
            <label className="col-cus-5">共 計</label>
            <input type="text" className="col-cus-7" placeholder="共 計" { ...total } />
          </div>
        </div>

        {/* 原 因 */}
        <div className="row detailReason">
          <div className="col-cus-12 cus-form-group">
            <label className="col-cus-2">原 因</label>
            <textarea className="col-cus-7" { ...cause }></textarea>
          </div>
        </div>

      </div>
    )
  }
}
