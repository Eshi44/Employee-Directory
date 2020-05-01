import React, { useContext } from "react";
import DataInTable from "../components/DataInTable";
import CreateContext from "../utils/CreateContext";

const Table = () => {
	// eslint-disable-next-line no-unused-vars
	const context = useContext(CreateContext);
	return (
		<div className="datatable mt-5">
            {/* hover effect */}
			<table className="table table-striped table-hover table-condensed">
                {/* import DataTable */}
				<DataInTable />
			</table>
		</div>
	);
};
export default Table;
