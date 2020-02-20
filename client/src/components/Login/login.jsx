import React from "react";
import "./style.scss";
import { Button } from "react-bootstrap";
import API from "../../utils/API";
import { container } from "react-bootstrap"


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedin: false
        };

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleUsername(event) {
        console.log(event.target.value)
        this.setState({
            username: event.target.value
        });
        console.log(event.target.value)
    }

    handlePassword(event) {
        console.log(event.target.value)
        this.setState({
            password: event.target.value
        })
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
        alert("You are logged in");
        console.log(event)
        const { username, password } = this.state;

        API.login(
            {
                username: this.state.username,
                password: this.state.password

            })
        console.log("logged")
        //logic for matching database
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">

                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username" value={this.state.username}>UserName</label>
                                <input type="text" name="username" placeholder="username" onChange={this.handleUsername} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" value={this.state.password}>Password</label>
                                <input type="password" name="password" placeholder="password" onChange={this.handlePassword} />
                            </div>
                            <div className="footer">
                                <div className="form-group">
                                    <Button variant="warning" type="submit">Login</Button>
                                </div>

                                <div className="form-group">
                                    <Button variant="secondary" href="/">Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </form>
        )
    }
}