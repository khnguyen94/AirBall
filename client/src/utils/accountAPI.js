import axios from "axios";
import passport from "passport";

export default {
    // create account
    addAccount: function (accountData) {
        return axios.post("/api/account/signup", accountData);
    },
    signInAccount: function(accountData){
        console.log("accountAPI - signin");
        // return axios.post("/api/account/login", accountData);
        axios.post("/api/account/login", accountData);
    }
}