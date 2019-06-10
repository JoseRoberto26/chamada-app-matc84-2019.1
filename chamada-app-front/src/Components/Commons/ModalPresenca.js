import React from 'react'
import { Button, Modal } from "react-bootstrap";

export default class ModalPresenca extends React.Component {

    render() {

        const alunosList = this.props.alunos !== null ? this.props.alunos.map ((aluno, i) => (
            <div key={i}>
                <div className={"aluno"+i}> 
                    <span>{aluno.aluno}</span>
                    <Button style={{marginLeft:"15px"}} onClick={() => this.props.alterarPresenca(aluno.id)}>Alterar Presença</Button>
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
                    {alunosList}
                </Modal.Body>
            </Modal>
        )
    }
}