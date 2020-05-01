//import react and search name
// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchName from "./SearchName";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			{/* <button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button> */}
			<div className="collapse navbar-collapse row">
				<div className="search-area col-4">
					<SearchName />
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
