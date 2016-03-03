import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class LeaveInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beginDate: '',
            beginPeriod: 'am',
            endDate: '',
            endPeriod: 'pm',
            total: 0,
            cause: ''
        };
    }
    
    componentDidMount() {
        findDOMNode(this.refs.beginDate).focus();
    }
    
    beginDateChange = (e) => {
        this.setState({
            beginDate: e.target.value.trim()
        })
    };
    
    beginPeriodChange = (e) => {
        this.setState({
            beginPeriod: e.target.value.trim()
        })
    };
    
    endDateChange = (e) => {
        this.setState({
            endDate: e.target.value.trim()
        })
    };
    
    endPeriodChange = (e) => {
        this.setState({
            endPeriod: e.target.value.trim()
        })
    };
    
    totalChange = (e) => {
        this.setState({
            total: e.target.value.trim()
        })
    };
    
    causeChange = (e) => {
        this.setState({
            cause: e.target.value.trim()
        })
    };    
        
    handleReselect = () => {
        this.props.reselect();  
    };
    
    handleSubmit = (e) => {
        const { addLeaveInfo } = this.props
        const { beginDate, beginPeriod, endDate, endPeriod, total, cause } = this.state
        e.preventDefault()

        if (!beginDate || !beginPeriod || !endDate || !endPeriod || total === 0 || !cause) 
        { 
            return; 
        }

        addLeaveInfo(Object.assign({}, this.state));
    };

    render() {
        return (
            <div className="detailForm">
                    
                {/* 重新選擇 */}
                <div className="row detailStatus">
                    <span className="col-cus-9">
                        <input type="button" value={ this.props.leaveType.type } />
                    </span>
                    <a className="col-cus-3" href="#" onClick={ this.handleReselect } data-flag="true" sendFlagAction="">重新選擇</a>
                </div>
                    
                {/* Form */}
                <div className="row">
                    
                    {/* 開始日期 */}
                    <div className="col-cus-6 cus-form-group">
                        <label className="col-cus-5">開始日期</label>
                        <input type="text" className="col-cus-7" placeholder="開始日期" ref="beginDate" onChange={ this.beginDateChange } value={ this.state.beginDate } />
                    </div>
                        
                    {/* 班次 */}
                    <div className="col-cus-6 cus-form-group">
                        <label className="col-cus-5">班次</label>
                        <select name="" id="" className="col-cus-7" onChange={ this.beginPeriodChange } value={ this.state.beginPeriod }>
                            <option value="am">上午</option>
                            <option value="pm">下午</option>
                        </select>
                    </div>
                        
                    {/* 結束日期 */}
                    <div className="col-cus-6 cus-form-group">
                        <label className="col-cus-5">結束日期</label>
                        <input type="text" className="col-cus-7" placeholder="結束日期" onChange={ this.endDateChange } value={ this.state.endDate } />
                    </div>
                        
                    {/* 班次 */}
                    <div className="col-cus-6 cus-form-group">
                        <label className="col-cus-5">班次</label>
                        <select name="" id="" className="col-cus-7" onChange={ this.endPeriodChange } value={ this.state.endPeriod }>
                            <option value="am">上午</option>
                            <option value="pm">下午</option>
                        </select>
                      </div>
                </div>
                    
                {/* 共 計 */}
                <div className="row">
                    <div className="col-cus-6 cus-form-group">
                        <label className="col-cus-5">共 計</label>
                        <input type="text" className="col-cus-7" placeholder="共 計" onChange={ this.totalChange } value={ this.state.total } />
                    </div>
                </div>
                    
                {/* 原 因 */}
                <div className="row detailReason">
                    <div className="col-cus-12 cus-form-group">
                        <label className="col-cus-2">原 因</label>
                        <textarea className="col-cus-7" onChange={ this.causeChange } value={ this.state.cause }></textarea>
                    </div>
                </div>
                    
                <button className="detailSubmit" onClick={ this.handleSubmit }>提交</button>
                  
            </div>
        )
	}
}
