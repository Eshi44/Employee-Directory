/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import NavBar from "../components/NavBar";
import CreateContext from "../utils/CreateContext";

const Body = () => {
	const [employeeState, setemployeeState] = useState({
		employee: [],
		filterEmployees: [],
	});

	//handle change on search from input box
	const handleSearchChange = (event) => {
		const filter = event.target.value;
		const finalFilter = employeeState.employee.filter((item) => {
			let lowercaseFirstAndLastName =
				item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
			if (lowercaseFirstAndLastName.indexOf(filter.toLowerCase()) !== -1) {
				return item;
			}
		});
		//spread- set state
		setemployeeState({ ...employeeState, filterEmployees: finalFilter });
	};

	//api call - useeffect is a hook to use in place of lifecylce methd ComponentDidMount for functional component
    // setemployeessate for employee state, empoloyee, and filteredemployees
    useEffect(() => {
		API.getAllUsers().then((results) => {
			setemployeeState({
				...employeeState,
				employee: results.data.results,
				filterEmployees: results.data.results,
			});
		});
	}, []);

	return (
        //create context.provider - pass in employee state and handlesearch
		<CreateContext.Provider value={{ employeeState, handleSearchChange }}>
			<NavBar />
			<div>
				<Table />
			</div>
		</CreateContext.Provider>
	);
};

export default Body;
