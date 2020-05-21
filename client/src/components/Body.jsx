/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import Table from "./Table";
import NavBar from "./NavBar";
import CreateContext from "../utils/CreateContext";

const Body = () => {
	const [employeeState, setemployeeState] = useState({
		employee: [],
		filterEmployees: [],
	});

	//handle change on search from input box -NAME
	const handleSearchChange = (event) => {
		const filter = event.target.value;
		const finalFilter = employeeState.employee.filter((name) => {
			let lowercaseFirstAndLastName =
				name.name.first.toLowerCase() + " " + name.name.last.toLowerCase();
			if (lowercaseFirstAndLastName.indexOf(filter.toLowerCase()) !== -1) {
				return name;
			}
		});
		//spread- set state
		setemployeeState({ ...employeeState, filterEmployees: finalFilter });
	};

	//handle change on search from input box -AGE
	const handleSearchChangeLocation = (event) => {
		
		const filterLocation = event.target.value;
		const finalFilterLocation = employeeState.employee.filter((geo) => {
			let local =
			geo.location.state.toLowerCase();
			if (local.indexOf(filterLocation.toLowerCase()) !== -1) {
				return geo;
			}
		});
		//spread- set state
		setemployeeState({ ...employeeState, filterEmployees: finalFilterLocation });

	};

	//api call - useeffect is a hook to use in place of lifecylce methd ComponentDidMount for functional component
	// setemployeessate for employee state, empoloyee, and filteredemployees
	useEffect(() => {
		API.getAllUsers().then((results) => {
			console.log(results.data.results);
			setemployeeState({
				...employeeState,
				employee: results.data.results,
				filterEmployees: results.data.results,
			});
			
		});
	}, []);

	return (
		//create context.provider - pass in employee state and handlesearch
		<CreateContext.Provider value={{ employeeState, handleSearchChange, handleSearchChangeLocation }}>
			<NavBar />
			<div>
				<Table />
			</div>
		</CreateContext.Provider>
	);
};

export default Body;
