import React from 'react';

const Test = () => {
	let input = null;
	const getInput = (e) => {
		e.preventDefault()
		console.log(input.value)
	}
	return (
		<div>
			<form onSubmit={getInput}>
				<input 
				 type="text"
				 ref={(node) => {
				 	input = node
				 }} />
				 <button type="submit">添加</button>
			</form>
		</div>
	)
}

export default Test