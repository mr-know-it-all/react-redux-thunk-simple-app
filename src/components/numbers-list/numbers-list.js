import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addNumber, computeSecretNumber} from '../../store/actions.js';

const NumbersList = (props) => {
	return (
		<div className={'numbers-list-wrapper'}>
			<h1>Numbers List</h1>
			<p className={'numbers-in-list'}>Numbers: {props.numbersList.map((n, index) => <span key={index}>{n}</span>)}</p>
			<button className={'add-number'} onClick={props.addNumber}>Add Number</button>
			<button className={'secret-number'} onClick={props.computeSecretNumber}>Add Secret Number</button>
			<p>{props.pendingData.secretNumber && 'computing secret number...'}</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numbersList: state.numbersList,
		pendingData: state.pendingData
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addNumber, computeSecretNumber
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NumbersList);
