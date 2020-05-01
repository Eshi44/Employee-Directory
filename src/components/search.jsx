import React, { useContext } from "react";
import createContext from "./createContext";

const Search = () => {
	const context = useContext(createContext);

	return (
		<div className="searchbox">
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text" id="">
						Search
					</span>
				</div>
				<input
					className="form-control mr-sm-4"
					type="search"
					placeholder="name"
					aria-label="Search"
					onChange={(e) => context.handleSearchChange(e)}
				/>
			</div>
		</div>
	);
};
export default Search;
