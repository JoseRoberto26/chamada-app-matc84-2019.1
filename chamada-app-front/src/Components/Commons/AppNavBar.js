import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./AppNavBar.css"
import { connect } from 'react-redux';
import {
    efetuarLogout
} from '../../Redux/Actions/LoginAction';

export class AppNavBar extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>PresençaFácil</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="nav1">
                        <Nav.Link href={"/"} onClick={() => this.props.efetuarLogout()}>Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps,{efetuarLogout})(AppNavBar);