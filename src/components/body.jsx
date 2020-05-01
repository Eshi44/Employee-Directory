
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import NavBar from "../components/NavBar"
import CreateContext from "../utils/CreateContext";


const Body = () => {

    const [employeeState, setemployeeState] = useState({
        users: [],
        order: "descend",
        filterEmployees: [],
        headings: [
          { name: "Image", order: "descend" },
          { name: "name",order: "descend" },
          { name: "phone", order: "descend" },
          { name: "email",order: "descend" },
          { name: "dob",order: "descend" }
        ]
      });
    

    //api call
      useEffect(() => {
        API.getAllUsers().then(results => {
          console.log(results.data.results);
          setemployeeState({
            ...employeeState,
            users: results.data.results,
            filterEmployees: results.data.results
          });
        });
      }, []);

      return (
        <CreateContext.Provider
          value={{ employeeState, handleSearchChange, handleSort }}
        >
          <NavBar />
          <div className="data-area">
            {employeeState.filterEmployees.length > 0 ? <Table /> : <div></div>}
          </div>
        </CreateContext.Provider>
      );
  
   
};

export default Body;