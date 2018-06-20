import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const count = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

const numbersList = (state = [], action) => {
	switch(action.type) {
		case 'ADD_NUMBER':
			return [...state, 42];
		case 'ADD_SECRET_NUMBER':
			return [...state, action.payload];
		default:
			return state;
	}
}

const rootReducer = combineReducers({count, numbersList});
const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;