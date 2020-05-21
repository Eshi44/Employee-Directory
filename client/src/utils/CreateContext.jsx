//import react
import React from "react";
//create a context object 
//when React renders a component that subscribes to this Context object 
//it will read the current context value from the closest matching Provider above it in the tree.
const createContext = React.createContext({});

export default createContext;
