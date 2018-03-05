import React, {
	Component
} from 'react';
import Search from './components/search'
// import Test from './components/test'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="todo">
		        <Search/>
		    </div>
		);
	}
}

export default App;