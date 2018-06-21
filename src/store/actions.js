export const incrementCounter = () => ({type: 'INCREMENT'});
export const decrementCounter = () => ({type: 'DECREMENT'});
export const addNumber = () => (dispatch) => dispatch({type: 'ADD_NUMBER'});

export const addSecretNumber = (number) => ({type: 'ADD_SECRET_NUMBER', payload: number});
export const startSecretNumberComp = () => ({type: 'START_SECRET_NUMBER_COMP'});
export const endSecretNumberComp = () => ({type: 'END_SECRET_NUMBER_COMP'});
export const computeSecretNumber = () => (dispatch) => {
	dispatch(startSecretNumberComp());

	return new Promise((resolve) => {
		setTimeout(() => resolve(42), 3000);
	}).then((number) => {
		dispatch(addSecretNumber(number));
		dispatch(endSecretNumberComp());
	});
};