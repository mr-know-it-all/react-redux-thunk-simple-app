import React from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from '../../store/actions.js';

let fetchMock = require('fetch-mock');

fetchMock.get('https://url', (url) => {
	console.log('GET url', url);

	return {hello: 'World'};
});

fetchMock.post('https://url', (url, data) => {
	console.log('POST payload', url, data);
	return {a: 2, b: 4, c: 5};
});


const Counter = (props) => {
	return (
		<div className={'counter-wrapper'}>
			<h1>Counter</h1>
			<p className={'counter-value'}>Counter Value: {props.count}</p>
			<button className={'counter-incrementer'} onClick={props.incrementCounter}>Increment Counter</button>
			<button className={'counter-decrementer'} onClick={props.decrementCounter}>Increment Counter</button>

			<button className={'counter-decrementer'} onClick={getSomeData}>Get Some Data</button>
			<button className={'counter-decrementer'} onClick={postSomeData}>Post Some Data</button>
		</div>
	);
}

function getSomeData() {
  return fetch('https://url').then(function(response) {
    return response.json();
  }).then(function(data) {
	  console.log('get response: ', data);
	}, function(e) {
		console.error(e);
	});
};

function postSomeData() {
  return fetch('https://url', {method: 'POST', body: JSON.stringify({a: 1, b: 2})}).then(function(response) {
    return response.json();
  }).then(function(data) {
	  console.log('post response: ', data);
	}, function(e) {
		console.error(e);
	});
};

const mapStateToProps = (state) => {
	return {
		count: state.count
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		incrementCounter: (e) => {
			e.stopPropagation();
			dispatch(incrementCounter());
		},
		decrementCounter: (e) => {
			e.stopPropagation();
			dispatch(decrementCounter());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);