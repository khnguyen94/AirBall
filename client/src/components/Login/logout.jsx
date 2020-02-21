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
        API.logout().then((resdata) => {
            console.log(resdata);
            alert(resdata.data.message);
        });
    }

    render() {
        return (
            <form>
                <Button variant="outline-light" onClick={this.handleSubmit}>Logout</Button>
            </form>
        )
    }
}

export default Logout;

