import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

class Saved extends Component {
    state = {
        books: []
    }

    render() {
        return(
            <Container fluid>
                <Jumbotron>
                <h1>(React) Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
                </Jumbotron>
                <Card>
                    <h1>Saved Books</h1>
                </Card>
            </Container>
        )
    }
}

export default Saved;