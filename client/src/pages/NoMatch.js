import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class NoMatch extends Component {
    state = {
        books: []
    }

    render() {
        return(
            <Container fluid>
                <Jumbotron>
                <h1>404: Page Does Not Exist</h1>
                </Jumbotron>
            </Container>
        )
    }
}

export default NoMatch;