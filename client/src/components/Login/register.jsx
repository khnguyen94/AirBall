import React from "react";
import "./style.scss";
import { Button } from "react-bootstrap"
import ApiHelper from "../../utils/accountAPI"
import API from "../../utils/API";

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handleCreatePassword = this.handleCreatePassword.bind(this)
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
    }

    handleFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
        console.log(event.target.value)
    }

    handleLastName(event) {
        this.setState({
            lastName: event.target.value
        });
        console.log(event.target.value)
    }


    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
        console.log(event.target.value)
    }


    handleUserName(event) {
        this.setState({
            userName: event.target.value
        });
        console.log(event.target.value)
    }


    handleCreatePassword(event) {
        this.setState({
            password: event.target.value
        });
        console.log(event.target.value)
    }


    handleConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        });
        console.log(event.target.value)
    }


    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        console.log(event.target.value)
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(event)
        const { firstName, lastName, email, confirmPassword, password } = this.state;
        console.log("value: ", password)
        const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
        console.log(re.test(password))
        const isOk = re.test(password);

        console.log(isOk);

        if (!isOk) {
            return alert('Password is weak!');
        }

        alert('A password was submitted that was ' + password.length + ' characters long.');
        console.log(this.state)
        if (this.state.password !== this.state.confirmPassword) {
            return alert("The passwords doesn't match")
            return false; //the form won't submit
        }

        API.register(
            {
                username: this.state.userName,
                password: this.state.password,
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            }).then(
                data => {
                    console.log(data);
                }
            )

        setTimeout(function () { alert("Account was succesfully created"); }, 10)


    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="base-container">
                    <div className="content">
                        <div className="image">

                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleFirstName} placeholder="First name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleLastName} placeholder="Last name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={this.state.email} onChange={this.handleEmail} name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">UserName</label>
                            <input type="text" value={this.state.userName} onChange={this.handleUserName} name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Create Password </label>
                            <input type="text" value={this.state.password} onChange={this.handleCreatePassword} name="password" placeholder="*******" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordc">Confirm Password </label>
                            <input type="password" value={this.state.confirmPassword} onChange={this.handleConfirmPassword} name="passwordc" placeholder="*******" />
                        </div>

                        <div className="footer">
                            <div className="form-group">
                                <Button variant="warning" type="submit">Create Account </Button>

                            </div>

                            <div className="form-group">
                                <Button variant="secondary">Close</Button>
                            </div>
                        </div>

                    </div >

                </div >

            </form>

        )

    }

}