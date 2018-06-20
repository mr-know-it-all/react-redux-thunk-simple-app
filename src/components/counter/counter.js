import React from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from '../../store/actions.js';

const Counter = (props) => {
	return (
		<div className={'counter-wrapper'}>
			<h1>Counter</h1>
			<p className={'counter-value'}>Counter Value: {props.count}</p>
			<button className={'counter-incrementer'} onClick={props.incrementCounter}>Increment Counter</button>
			<button className={'counter-decrementer'} onClick={props.decrementCounter}>Increment Counter</button>
		</div>
	);
}

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