import React, { useContext } from "react";
import DataInTable from "../components/DataInTable";
import CreateContext from "../utils/CreateContext";

const Table = () => {
	// eslint-disable-next-line no-unused-vars
	const context = useContext(CreateContext);
	return (
		<div className="datatable">
			<table className="table">
				<tr>
					{context.employeeState.headings.map(({ name }) => {
						return (
							<th
								className="col"
								key={name}
								onClick={() => {
									context.handleSort(name);
								}}
							>
								{name}
								<span className="pointer"></span>
							</th>
						);
					})}
				</tr>

				{/* import DataTable */}
				<DataInTable />
			</table>
		</div>
	);
};
export default Table;
