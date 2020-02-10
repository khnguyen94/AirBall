import axios from "axios";

export default {
    // create account
    addAccount: function (accountData) {
        return axios.post("/api/account/signup", accountData);
    },
    signInAccount: function(accountData){
        console.log("accountAPI - singin");
        return axios.post("/api/account/login", accountData);
    }
}