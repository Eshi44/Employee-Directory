//import react and search name
// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchName from "./SearchName";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse row">
				<div className="search-area col-4">
					<SearchName />
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
