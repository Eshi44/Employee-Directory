import axios from "axios";
//Random User API
export default {
	getAllUsers: function () {
		return axios.get("https://randomuser.me/api/?results=100&nat=us");
	},
};
