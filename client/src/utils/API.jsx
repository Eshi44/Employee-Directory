//import axios: yard add axios
import axios from "axios";
//Random User API
export default {
	//getting all users(cap 400) at random from randomuser api
	getAllUsers: function () {
		return axios.get("https://randomuser.me/api/?results=400&nat=us");
	},
};
