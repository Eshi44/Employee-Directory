/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
//import react, createContext and useContext
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import CreateContext from "../utils/CreateContext";

const DataInTable = () => {
	// eslint-disable-next-line no-unused-vars
	const context = useContext(CreateContext);

	return (
		<tbody>
			{context.employeeState.filterEmployees.map(
                //deconstructing
				({ name, picture, phone, email, dob }) => {
					return (
						<tr>
							<td data="Image">
								<img src={picture.large} />
							</td>
							<td data="Name">
								{name.first} {name.last}
							</td>
							<td data="Phone">{phone}</td>
							<td data="Email">
								<a href="">{email}</a>
							</td>
							<td data="DOB">{dob.age}</td>
						</tr>
					);
				}
			)}
		</tbody>
	);
};
export default DataInTable;
