//import axios: yard add axios
import axios from "axios";
//Random User API
export default {
	//getting all users(cap 100) at random from randomuser api
	getAllUsers: function () {
		return axios.get("https://randomuser.me/api/?results=100&nat=us");
	},
};
