import React from 'react';
import ReactDOM from 'react-dom';

export default class Llist extends React.Component {
	constructor(props){
		super(props);
		this.state = {"btnListShow" : true}
		// 事件绑定
		this.handleSelect = this.handleSelect.bind(this);
	}
	componentWillReceiveProps(nextProps){
		// console.log(nextProps);
		let reSelectflag = nextProps.reSelectflag;
		this.setState({"btnListShow":reSelectflag});
	}
	handleSelect() {
		// DOM加载完成后，点击获取innerText
		let detailBtnval = ReactDOM.findDOMNode(this.refs.name).innerText;
		// 把获得的detailBtnval 通过props.sendAction往上传递
		this.props.sendAction(detailBtnval);
	}

	render(){
		if(this.state.btnListShow){
			return (
				<div className="btn-block">
					<button onClick={this.handleSelect} ref="name">{this.props.val}</button>
				</div>
			)
		}else{
			return null;
		}
		
	}
}