import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './App.css';
import store from './store/';
import Counter from './components/counter/counter.js';
import NumbersList from './components/numbers-list/numbers-list.js';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Counter />
					<NumbersList />
				</div>
			</Provider>
		);
	}
}

export default App;
