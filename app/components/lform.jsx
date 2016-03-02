import React from 'react';
import ReactDOM from 'react-dom';

export default class Lform extends React.Component {
    
	// 在构造函数中初始化
	constructor(props) {
		super(props);
	}
    
	render() {
		return (
			<div className="col-cus-6 cus-form-group">
				<label className="col-cus-5">{this.props.name}</label>
				<input type="text" className="col-cus-7" placeholder={this.props.name}/>
			</div>
		)
	}
}