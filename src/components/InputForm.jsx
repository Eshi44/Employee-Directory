//import react, createContext and useContext hook
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import CreateContext from "../utils/CreateContext";

//input form within navbar
const InputForm = () => {
	const context = useContext(CreateContext);

	return (
		<input
			className="form-control"
			type="search"
			placeholder="search employee name"
			aria-label="Search"
			//handle onChange for event-input of search name
			onChange={(e) => context.handleSearchChange(e)}
		/>
	);
};
export default InputForm;
