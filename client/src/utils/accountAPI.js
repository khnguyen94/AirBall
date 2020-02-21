import axios from "axios";
import passport from "passport";

export default {
    // create account
    addAccount: function (accountData) {
        return axios.post("/api/account/signup", accountData);
    },
    logInAccount: function(accountData){
        return axios.post("/api/account/login", accountData);
    },
    logOutAccount: function(){
        console.log("accountAPI - LOGOUT");
        return axios.delete("/api/account/logout");
    }
}