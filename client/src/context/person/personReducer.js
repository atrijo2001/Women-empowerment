import { ADD_PERSON, DELETE_PERSON } from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_PERSON:
			return {
				...state,
				persons: [...state.persons, action.payload],
			};
		case DELETE_PERSON:
			return {
				...state,
				persons: state.persons.filter((person) => person.id !== action.payload),
			};
		default:
			return state;
	}
};
