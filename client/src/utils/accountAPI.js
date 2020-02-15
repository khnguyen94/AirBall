import axios from "axios";
import passport from "passport";

const ApiHelper = {
    // create account
    addAccount: function (accountData) {
        return axios.post("/api/account/signup", accountData);
    },
    logInAccount: function (accountData) {
        axios.post("/api/account/login", accountData);
    },
    logOutAccount: function () {
        console.log("accountAPI - LOGOUT");
        axios.delete("/api/account/logout");
    }
}
export default ApiHelper;