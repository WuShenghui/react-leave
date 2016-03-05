import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class RequestorInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { "requestorInfo": this.props.requestorInfo };
    }
    
    componentDidMount() {
        findDOMNode(this.refs.id).focus();
    }
    
    idChange = (e) => {
        this.state.requestorInfo.id = e.target.value.trim();
        this.setState(this.state.requestorInfo);
    };
    
    companyChange = (e) => {
        this.state.requestorInfo.company = e.target.value.trim();
        this.setState(this.state.requestorInfo);
    };
    
    departmentChange = (e) => {
        this.state.requestorInfo.department = e.target.value.trim();
        this.setState(this.state.requestorInfo);
    };
    
    hiredateChange = (e) => {
        this.state.requestorInfo.hiredate = e.target.value.trim();
        this.setState(this.state.requestorInfo);
    };
    
    nameChange = (e) => {
        this.state.requestorInfo.name = e.target.value.trim();
        this.setState(this.state.requestorInfo);
    };
    
    positionChange = (e) => {
        this.state.requestorInfo.position = e.target.value.trim();
        this.setState(this.state.requestorInfo);
    };

    render() {
        const { requestorInfo } = this.state
        return (
            <div>

                {/* 職員編號 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 職員編號 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="職員編號" ref="id" onChange={ this.idChange } value={ requestorInfo.id } />
                </div>
                
                {/* 雜誌/公司 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 雜誌/公司 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="雜誌/公司" onChange={ this.companyChange } value={ requestorInfo.company } />
                </div>
                
                {/* 部門 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 部門 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="部門" onChange={ this.departmentChange } value={ requestorInfo.department } />
                </div>
                
                {/* 到職日期" */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 到職日期 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="到職日期" onChange={ this.hiredateChange } value={ requestorInfo.hiredate } />
                </div>
                
                {/* 職員姓名 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 職員姓名 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="職員姓名" onChange={ this.nameChange } value={ requestorInfo.name } />
                </div>
                
                {/* 職  位 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 職  位 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="職  位" onChange={ this.positionChange } value={ requestorInfo.position } />
                </div>                
                
            </div>
        )
    }
}