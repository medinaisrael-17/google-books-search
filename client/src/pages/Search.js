import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Search extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: ""
    }

    render() {
        return(
            <Container fluid>
                <Jumbotron>
                    <h1>(React) Google Books Search</h1>

                    <h3>Search for and Save Books of Interest</h3>
                </Jumbotron>
                <Input/>
                
            </Container>
        )
    }
}


