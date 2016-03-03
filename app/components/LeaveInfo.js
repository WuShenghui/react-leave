import React, { Component } from 'react'
import render from 'react-dom'

export default class LeaveInfo extends Component {
    constructor(props) {
        super(props);
    }
    
    handleReselect = () => {
      this.props.reselect();  
    };

    render() {
          return (
              <div className="detailForm">
                    
                  {/* 重新選擇 */}
                  <div className="row detailStatus">
                      <span className="col-cus-9">
                          <input type="button" value={ this.props.leaveType.type } />
                      </span>
                      <a className="col-cus-3" href="#" ref="reSelect" onClick={ this.handleReselect } data-flag="true" sendFlagAction="">重新選擇</a>
                  </div>
                    
                  {/* Form */}
                  <div className="row">
                    
                      {/* 開始日期 */}
                      <div className="col-cus-6 cus-form-group">
                          <label className="col-cus-5">開始日期</label>
                          <input type="text" className="col-cus-7" placeholder="開始日期" />
                      </div>
                        
                      {/* 班次 */}
                      <div className="col-cus-6 cus-form-group">
                          <label className="col-cus-5">班次</label>
                          <select name="" id="" className="col-cus-7">
                              <option>上午</option>
                              <option>下午</option>
                          </select>
                      </div>
                        
                      {/* 結束日期 */}
                      <div className="col-cus-6 cus-form-group">
                          <label className="col-cus-5">結束日期</label>
                          <input type="text" className="col-cus-7" placeholder="結束日期" />
                      </div>
                        
                      {/* 班次 */}
                      <div className="col-cus-6 cus-form-group">
                          <label className="col-cus-5">班次</label>
                          <select name="" id="" className="col-cus-7">
                              <option>上午</option>
                              <option>下午</option>
                          </select>
                      </div>
                  </div>
                    
                  {/* 共 計 */}
                  <div className="row">
                      <div className="col-cus-6 cus-form-group">
                          <label className="col-cus-5">共 計</label>
                          <input type="text" className="col-cus-7" placeholder="共 計" />
                      </div>
                  </div>
                    
                  {/* 原 因 */}
                  <div className="row detailReason">
                      <div className="col-cus-12 cus-form-group">
                          <label className="col-cus-2">原 因</label>
                          <textarea className="col-cus-7"></textarea>
                      </div>
                  </div>
                    
                  <button className="detailSubmit">提交</button>
                  
              </div>
          )
	}
}
