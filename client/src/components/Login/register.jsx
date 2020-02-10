import React from "react";
import "./style.scss";


export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="content">
                <div className="image">

                </div>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="username" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Create Password </label>
                    <input type="text" name="password" placeholder="*******" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordc">Confirm Password </label>
                    <input type="password" name="passwordc" placeholder="*******" />
                </div>
            </div >

        </div >
    }
}