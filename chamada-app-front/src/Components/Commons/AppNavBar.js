import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./AppNavBar.css"

export default class AppNavBar extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href={"/home"}>PresençaFácil</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="nav1">
                        <Nav.Link href={"/home"}>Home</Nav.Link>
                        <Nav.Link href={"/disciplinas"}>Disciplinas</Nav.Link>
                    </Nav>
                    <Nav id="nav2">
                        <Nav.Link href={"/"}>Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}