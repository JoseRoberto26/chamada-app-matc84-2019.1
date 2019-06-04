import React from 'react'
import { Button, Modal } from "react-bootstrap";

export default class ModalCaptcha extends React.Component {
    render() {
        return(
            <Modal show={this.props.showModalCaptcha} onHide={this.props.handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.handleModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}