import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API"

export class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedout: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log(event);

        API.logout(
            console.log("logged out")

        )

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Button variant="light">Logout</Button>
            </form>
        )
    }
}

export default Logout;

