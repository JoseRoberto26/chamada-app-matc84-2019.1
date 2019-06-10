import React from 'react'
import { Button, Modal } from "react-bootstrap";

export default class ModalCaptcha extends React.Component {

    gerarCaptcha = () => {
        var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
        var lengthOtp = 6;
        var captcha = [];

        for (var i = 0; i < lengthOtp; i++) {
            var index = Math.floor(Math.random() * charsArray.length + 1);
            if (captcha.indexOf(charsArray[index]) === -1)
              captcha.push(charsArray[index]);
            else i--;
        }

        return captcha
    }

    render() {
        return(
            <Modal show={this.props.showModalCaptcha} onHide={this.props.handleModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Footer>
                    <Button style={{flexGrow:"1"}} variant="primary" onClick={() => this.props.createChamada(this.gerarCaptcha())}>
                        Abrir Chamada
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}