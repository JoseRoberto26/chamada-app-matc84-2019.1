import React from 'react'
import { Button, Modal } from "react-bootstrap";

export default class ModalCaptcha extends React.Component {
    render() {
        
        return(
            <Modal show={this.props.showModalCaptcha} onHide={this.props.handleModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Captcha:</Modal.Body>
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