import React, { Component } from 'react'
import render from 'react-dom'

export default class RequestorInfo extends Component {
    constructor(props) {
        super(props);

        this.state = { "requestorInfo": this.props.requestorInfo };
    }

    render() {
        const { requestorInfo } = this.state
        return (
            <form>

                {/* 職員編號 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 職員編號 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="職員編號" value={ requestorInfo.id } />
                </div>
                
                {/* 雜誌/公司 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 雜誌/公司 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="雜誌/公司" value={ requestorInfo.company } />
                </div>
                
                {/* 部門 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 部門 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="部門" value={ requestorInfo.department } />
                </div>
                
                {/* 到職日期" */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 到職日期" < /label>
                    < input type= "text" className= "col-cus-7" placeholder="到職日期" value={ requestorInfo.hiredate } />
                </div>
                
                {/* 職員姓名 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 職員姓名 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="職員姓名" value={ requestorInfo.name } />
                </div>
                
                {/* 職  位 */}
                <div className="col-cus-6 cus-form-group" >
                    <label className="col-cus-5" > 職  位 < /label>
                    < input type= "text" className= "col-cus-7" placeholder="職  位" value={ requestorInfo.position } />
                </div>                
                
            </form>
        )
    }
}