// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import NavBar from "../components/NavBar";
import CreateContext from "../utils/CreateContext";

const Body = () => {
	const [employeeState, setemployeeState] = useState({
		employee: [],
		order: "descend",
		filterEmployees: [],
		headings: [
			{ name: "image", order: "descend" },
			{ name: "name", order: "descend" },
			{ name: "phone", order: "descend" },
			{ name: "email", order: "descend" },
			{ name: "dob", order: "descend" },
		],
    });
    
    //handle change on search from input box
	const handleSearchChange = (event) => {
		const filter = event.target.value;
		const finalFilter = employeeState.employee.filter((item) => {
			let values =
				item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
			console.log(filter, values);
			if (values.indexOf(filter.toLowerCase()) !== -1) {
				return item;
			}
		});
		//spread and set state
		setemployeeState({ ...employeeState, filterEmployees: finalFilter });
	};

	

		setemployeeState({
			...employeeState,
			filterEmployees: sortedUsers,
			headings: updatedHeadings,
		});
	};
    
	//api call - useeffect is a hook to use in place of lifecylce methd ComponentDidMount for functional component
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
		<CreateContext.Provider
			value={{ employeeState, handleSearchChange, sorting }}
		>
			<NavBar />
			<div>
				<Table />
			</div>
		</CreateContext.Provider>
	);
};

export default Body;
