import React from "react";
import DataInTable from "../components/DataInTable";

const Table = () => {
	// eslint-disable-next-line no-unused-vars
	return (
		<div className="datatable">
			<table className="table">
				{/* import DataTable */}
				<DataInTable />
			</table>
		</div>
	);
};
export default Table;
