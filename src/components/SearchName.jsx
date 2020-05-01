//import react and inputform
import React from "react";
import InputForm from "./InputForm";
//search name input form
const SearchName = () => {
	return (
		<div className="searchbox">
			<div className="input-group">
				<div className="input-group-prepend">
				</div>
				<InputForm />
			</div>
		</div>
	);
};
export default SearchName;
