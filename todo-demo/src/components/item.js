import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';
let propTypes = {
	todo: PropTypes.object,
	onCompletedHandle: PropTypes.func,
	completedHandle: PropTypes.func,
	keyCodeHandle: PropTypes.func
}
class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowInput: false,
			value: ''
		}
		this.hasInput = this.hasInput.bind(this)
		this.onKeyDownHandle = this.onKeyDownHandle.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onBlur = this.onBlur.bind(this)
	}

	//挂载之前
	componentWillMount() {
		console.log(this.refs.inputTextNode, 'willMount')

	}
	//挂载之后
	componentDidMount() {
		console.log(this.refs.inputTextNode, 'DidMount')
	}


	//显示隐藏input
	hasInput() {

		let {
			value
		} = this.props.todo;
		this.setState({
			isShowInput: true,
			value
		}, () => {
			this.refs.inputTextNode.focus()
		})

	}
	//input 实时输入的值
	onChange(e) {
		this.setState({
			value: e.target.value
		})
	}
	keyCodeHandle() {

		let {
			todo,
			keyCodeHandle
		} = this.props;
		keyCodeHandle(todo, this.state.value)

		this.setState({
			isShowInput: false
		})
	}
	//输入完成时,enter
	onKeyDownHandle(e) {

		if (e.keyCode !== 13) return;
		this.keyCodeHandle()
	}
	//输入完成失去焦点
	onBlur() {
		this.keyCodeHandle()
	}


	render() {
		let {
			todo,
			onCompletedHandle,
			completedHandle
		} = this.props;
		let {
			hasInput,
			onKeyDownHandle,
			onChange,
			onBlur
		} = this;
		let {
			value,
			isShowInput
		} = this.state;
		let doubleInput = null;
		if (isShowInput) {
			doubleInput = (
				<input 
					type = "text"
					className = "inputText"
					onKeyDown = {
						(e) => onKeyDownHandle(e)
					}
					onChange = {
						onChange
					}
					onBlur = {
						onBlur
					}
					value = {
						value
					}
					ref = "inputTextNode" 
				/>
			)
		}
		return (
			<li>
				{doubleInput}
			<input 
				className="check" 
				onChange={(e) => { 
					completedHandle(e,todo) 
				}} 
				checked={todo.hasCompleted}
				type="checkbox"
			/>
			<span 
			className='txt' 
			onDoubleClick={hasInput}
			style={{ textDecoration: todo.hasCompleted ? 'line-through' : 'none' }}>
			{todo.value}
			</span>
			<span onClick={ev => onCompletedHandle(todo)} className="btn">X</span></li>
		)
	}
}

Item.propTypes = propTypes;

export default Item