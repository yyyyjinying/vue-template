import React, {
	Component
} from 'react';

const Test = (props) => {
	return (
		<form onSubmit={props.onclickHandle}>
			<input 
			 type="text"
			 ref={props.inputRef}
			  />
			<button type="submit">添加</button>
		</form>
	)
}


class Search extends Component {
	constructor(props) {
		super(props)
		this.inputHandle = this.inputHandle.bind(this)
	}
	inputHandle(e) {
		e.preventDefault()
		console.log(this.textInput.value)
	}
	render() {
		return (
			<div>
				<Test onclickHandle={this.inputHandle} inputRef={(node) => { this.textInput = node }}/>

			</div>
		)
	}
}

export default Search