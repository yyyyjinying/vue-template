import React, {
	Component
} from 'react';
import Item from './item';

import './style.css';

const Header = ({
	inputHandle,
	onChangeHandle,
	allToggleHandle,
	textInput,
	countLength
}) => {
	return (
		<div className="header">
			<input 
			 checked={countLength == 0}
			 type="checkbox"
			 className="check"
			 onChange={allToggleHandle}
			/>
			<input 
			 type="text"
			 className="txt"
			 value={textInput}
			 onChange={onChangeHandle}
			 // onKeyDown={ inputHandle}
			 onKeyDown={(e) => inputHandle(e)}
			  />
			<button type="button" onClick={inputHandle}>-></button>
		</div>
	)
}



const Footer = ({
	allCompletedHandle,
	isShow,
	countLength,
	view,
	onAllSelect
}) => {
	let btn = null;

	if (isShow) {
		btn = (
			<span>
				<button type="button" onClick={(ev) => { allCompletedHandle() }}>del</button>
			</span>
		)
	}
	return (
		<div className="footer">
			<span>{countLength}</span>
			<span className={view == 'all'?'active':''} onClick={() => onAllSelect('all')}>All</span>
			<span className={view == 'active'?'active':''} onClick={() => onAllSelect('active')}>active</span>
			<span className={view == 'complete'?'active':''} onClick={() => onAllSelect('complete')}>completed</span>
			{btn}
		</div>
	)
}

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todoDatas: [],
			textInput: '',
			view: 'all'
		};
		this.inputHandle = this.inputHandle.bind(this)
		this.onCompletedHandle = this.onCompletedHandle.bind(this)
		this.completedHandle = this.completedHandle.bind(this)
		this.allCompletedHandle = this.allCompletedHandle.bind(this)
		this.onChangeHandle = this.onChangeHandle.bind(this)
		this.allToggleHandle = this.allToggleHandle.bind(this)
		this.onAllSelect = this.onAllSelect.bind(this)
		this.keyCodeHandle = this.keyCodeHandle.bind(this)
	}
	//Item输入新的value
	keyCodeHandle(todo, value) {
		let {
			todoDatas
		} = this.state;
		todoDatas = todoDatas.map((item) => {
			if (item.id === todo.id) {
				item.value = value;
			}
			return item;
		})
		/*this.setState({
			todoDatas
		})*/
	}

	allToggleHandle(e) {
		let {
			todoDatas
		} = this.state;
		let {
			checked
		} = e.target;
		todoDatas = todoDatas.map((item) => {
			item.hasCompleted = checked;
			return item;
		})
		this.setState({
			todoDatas
		})
	}
	onChangeHandle(e) {
		this.setState({
			textInput: e.target.value
		})
	}
	inputHandle(e) {
		if (e.keyCode !== 13) return;
		const value = this.state.textInput.trim();
		if (!value) {
			return
		}

		let todo = {};
		todo.id = new Date().getTime();
		todo.value = value;
		todo.hasCompleted = false;

		let {
			todoDatas
		} = this.state;
		todoDatas.push(todo);
		this.setState({
			todoDatas,
			textInput: ''
		});
	}

	//点击完成
	onCompletedHandle(todo) {
		let {
			todoDatas
		} = this.state;
		todoDatas = todoDatas.filter((item) => {
			return item.id !== todo.id
		})
		this.setState({
			todoDatas
		})
	}
	//点击选中
	completedHandle(e, todo) {
		// console.log(todo)
		let {
			checked
		} = e.target;
		let {
			todoDatas
		} = this.state;

		todoDatas = todoDatas.map((item, index) => {
			// return item.id === todo.id ? item.hasCompleted = !item.hasCompleted : item;
			if (item.id === todo.id) {
				item.hasCompleted = checked;

			}
			return item;

		})

		this.setState({
			todoDatas
		})



	}
	//全部选中completed为true的项
	allCompletedHandle() {
		let {
			todoDatas
		} = this.state;
		todoDatas = todoDatas.filter((item) => {
			return !item.hasCompleted
		})
		this.setState({
			todoDatas
		})
	}
	//all视图
	onAllSelect(param) {
		this.setState({
			view: param
		})
	}

	render() {

		let {
			inputHandle,
			onChangeHandle,
			onCompletedHandle,
			completedHandle,
			allCompletedHandle,
			allToggleHandle,
			onAllSelect,
			keyCodeHandle
		} = this;
		let {
			todoDatas,
			textInput,
			view

		} = this.state;
		let items = null,
			footer = null,
			itemBox = null,
			countLength = todoDatas.length;

		//filter视图
		todoDatas = todoDatas.filter((item) => {
			if (item.hasCompleted) countLength--;
			switch (view) {
				case 'active':
					return !item.hasCompleted;
				case 'complete':
					return item.hasCompleted;
				default:
					return true;
			}
		})

		if (todoDatas.length) {
			itemBox = (
				<ul>
					{
						todoDatas.map((elt, i) => {
							
							return (
								<Item
								{
									...{
										onCompletedHandle,
										completedHandle,
										keyCodeHandle,
										todo:elt
									}
								}

								key={i}

								/>
							)
						})
					}
				</ul>
			);

			footer = (
				<Footer
				 {
				 	...{
				 		isShow:countLength < todoDatas.length,
				 		allCompletedHandle,
				 		countLength,
				 		view,
				 		onAllSelect
				 	}
				 }
				/>
			);
		}
		return (
			<div className="todoBox">
				<Header {...{countLength,textInput,allToggleHandle,inputHandle,onChangeHandle}} />
				{itemBox}
				{footer}
			</div>
		)
	}
}

export default Search