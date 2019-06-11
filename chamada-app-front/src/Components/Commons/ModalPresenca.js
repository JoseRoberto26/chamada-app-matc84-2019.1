import React from 'react'
import { Button, Modal } from "react-bootstrap";

export default class ModalPresenca extends React.Component {

    render() {

        const presencaList = this.props.presencas !== null ? this.props.presencas.map ((presenca, i) => (
            <div key={i}>
                <div className={"aluno"+i}> 
                    <span>{presenca.usuario}</span>
                    <Button style={{marginLeft:"15px"}} onClick={() => this.props.alterarPresenca(presenca._id)}>Alterar Presença</Button>
                </div>               
            </div>
        ))
        : 
        <></>;

        return(
            <Modal show={this.props.showModalPresenca} onHide={this.props.handleModal()}>
                <Modal.Header closeButton>
                    Lista de Presença
                </Modal.Header>
                <Modal.Body>
                    {presencaList}
                </Modal.Body>
            </Modal>
        )
    }
}