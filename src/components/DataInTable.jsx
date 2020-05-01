//import react, createContext and useContext
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import CreateContext from "../utils/CreateContext";

const DataInTable = () => {
    // eslint-disable-next-line no-unused-vars
    const context = useContext(CreateContext);

    return(

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

    );
}
export default DataInTable;