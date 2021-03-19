import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import personContext from './personContext';
import PersonReducer from './PersonReducer';
import { ADD_PERSON, DELETE_PERSON } from '../types';

const PersonState = (props) => {
	const initialState = {
		persons: [
			{
				id: 1,
				name: 'Jilly Johnson',
				age: '25',
				address: 'Bolpur',
				services: 'House-hold chores',
				timeslot: 'morning',
				salary: '300',
				description: 'brooming, mopping, washing clothes',
				ngo: 'Ayuda',
			},
			{
				id: 2,
				name: 'Saheli Ghosh',
				age: '20',
				address: 'Rampurhat',
				services: 'Cooking',
				timeslot: 'afternoon',
				salary: '500',
				description: 'can cook healthy and delicious food',
				ngo: 'Anokha',
			},
			{
				id: 3,
				name: 'Kusum',
				age: '27',
				address: 'Haldia',
				services: 'Nursing',
				timeslot: 'evening',
				salary: '200',
				description: 'Can assist in any emergency conditions',
				ngo: 'Red Cross',
			},
		],
	};
	const [state, dispatch] = useReducer(PersonReducer, initialState);

	//Add Person

	const addPerson = (person) => {
		person.id = uuidv4();
		dispatch({ type: ADD_PERSON, payload: person });
	};

	//Delete Person

	const deletePerson = (id) => {
		dispatch({ type: DELETE_PERSON, payload: id });
	};
	return (
		<personContext.Provider
			value={{
				persons: state.persons,
				addPerson,
				deletePerson,
			}}
		>
			{props.children}
		</personContext.Provider>
	);
};

export default PersonState;
