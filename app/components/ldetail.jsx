import React from 'react';
import ReactDOM from 'react-dom';
import Lform from './lform';

export default class Idetail extends React.Component {
    
	constructor(props) {
		super(props);
		// 设置初始化的tab 不显示
		this.state = {"detailShow": false};
		//this.handleReselect = this.handleReselect.bind(this);
	}
    
	// 当传入的props有变化，就是时候发起请求了 更新tab内容 
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
		let detailval = nextProps.detailval; //获得变化的值
		if(nextProps.reSelectflag === "true"){
			this.setState({"detailShow":false}); //只要发生改变tab显示
		}else{
		this.setState({"detailShow":true}); //只要发生改变tab显示

		}
	}
    
	handleReselect = () => {
		let reSelect = ReactDOM.findDOMNode(this.refs.reSelect).dataset.flag;
		this.props.sendAction(reSelect);
		this.setState({"detailShow":false});
		// console.log(this.state.detailShow);
	};
    
	render() {
		if(this.state.detailShow) {
            return (
                <div className="detailForm">
                    <div className="row detailStatus">
                        <span className="col-cus-9">
                            <input type="button" value={this.props.detailval} />
                        </span>
                        <a className="col-cus-3" href="#" ref="reSelect" onClick={this.handleReselect} data-flag="true" sendFlagAction="">重新選擇</a>
                    </div>
                    <div className="row">
                        <div className="col-cus-6 cus-form-group">
                            <label className="col-cus-5">開始日期</label>
                            <input type="text" className="col-cus-7" placeholder="開始日期"/>
                        </div>
                        <div className="col-cus-6 cus-form-group">
                            <label className="col-cus-5">班次</label>
                            <select name="" id="" className="col-cus-7">
                                <option>上午</option>
                                <option>下午</option>
                            </select>
                        </div>
                        <div className="col-cus-6 cus-form-group">
                            <label className="col-cus-5">結束日期</label>
                            <input type="text" className="col-cus-7" placeholder="結束日期"/>
                        </div>
                        <div className="col-cus-6 cus-form-group">
                            <label className="col-cus-5">班次</label>
                            <select name="" id="" className="col-cus-7">
                                <option>上午</option>
                                <option>下午</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                    <Lform name="共 計"></Lform>
                    </div>
                    <div className="row detailReason">
                    <div className="col-cus-12 cus-form-group">
                        <label className="col-cus-2">原 因</label>
                        <textarea className="col-cus-7"></textarea>
                    </div>
                    </div>
                    <button className="detailSubmit">提交</button>
                </div>
            )
		} else {
			return (null)
		}
	}
}