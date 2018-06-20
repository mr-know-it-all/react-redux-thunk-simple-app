export const incrementCounter = () => ({type: 'INCREMENT'});
export const decrementCounter = () => ({type: 'DECREMENT'});
export const addNumber = () => (dispatch) => dispatch({type: 'ADD_NUMBER'});
export const addSecretNumber = (number) => ({type: 'ADD_SECRET_NUMBER', payload: number});
export const computeSecretNumber = () => (dispatch) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(42), 3000);
	}).then((number) => dispatch(addSecretNumber(number)));
};