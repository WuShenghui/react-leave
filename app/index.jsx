import '../node_modules/normalize.css/normalize.css';
import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Lform from './components/lform';
import Llist from './components/llist';
import Ldetail from './components/ldetail';

class App extends React.Component {
    
	constructor() {
		super();
		// 初始化detailVal为空
		this.state = { "detailVal": "", "selectFlag": "" };
	}
    
	// 通过选择按钮，改变detailVal的状态
	refreshDetailBtnVal = (val) => {
		this.setState({ "detailVal": val });
		// 选择按钮时，讲状态设置为初似状态
		this.setState({ "selectFlag": "" });
	};
    
	reSelectVal = (val) => {
		this.setState({ "selectFlag": val });
	};
    
	render() {
		const labelArr = ["職員編號", "雜誌/公司", "部門", "到職日期", "職員姓名", "職  位"];
		const btnArr = ["有薪年假", "病假", "補假", "無薪假", "分娩假", "婚假", "恩恤假", "其他"];
		// Jsx here!
		return (
			<div>
            
				<div className="row">
                    {
                        labelArr.map((labelItem) => <Lform key={ labelItem } name={ labelItem } />)
                    }
                </div>
                
                <div className="row">
                    {
                        // 获得选中按钮的值，通过refreshDetailBtnVal方法改变状态
                        btnArr.map((btnItem) => <Llist key={ btnItem } val={ btnItem } sendAction={ this.refreshDetailBtnVal } reSelectflag={ this.state.selectFlag } />)
                    }
                </div>
                
                {/* 获取detailVal改变的状态，传给detailval */}
                <Ldetail detailval={ this.state.detailVal } sendAction={ this.reSelectVal } reSelectflag={ this.state.selectFlag } />
			 
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
