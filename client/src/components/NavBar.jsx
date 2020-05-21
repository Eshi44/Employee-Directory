//import react and search name
// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchName from "./SearchName";
import SearchLocation from "./SearchLocation";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse row">
				<div className="search-area col-6">
					<SearchName /> 
				</div>
				<div className="search-area col-6">
					 <SearchLocation />
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
