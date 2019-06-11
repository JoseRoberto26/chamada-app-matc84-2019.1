import React from "react";
import Header from "../Commons/Header";
import AppNavBar from "../Commons/AppNavBar";
import { connect } from 'react-redux';
import {Redirect} from 'react-router'
import { Button, Card } from "react-bootstrap";
import {
    alterarPresenca,
    createChamada,
    encerraChamada,
    obterChamadas,
    viewModal,
    viewPresencaModal
} from "../../Redux/Actions/HomeAction"
import ModalCaptcha from '../Commons/ModalCaptcha'
import ModalPresenca from '../Commons/ModalPresenca'

export class Home extends React.Component {

    handleModal = () => {
        this.props.viewModal()
    }

    componentWillMount = () => {
        this.props.obterChamadas()
    }

    render() {
// console.log("Usuario: "+ JSON.stringify(this.props.usuario) )
// console.log("Chamada Ativa: "+JSON.stringify(this.props.chamadaAtiva))
// console.log("Alunos: "+JSON.stringify(this.props.alunos))
        return(
            <>
{console.log(this.props.chamadaAtiva)}

                {this.props.logado ?
                    !this.props.usuario.isAluno ? 
                        <div>
                            <Header/>
                            <AppNavBar/>

                            <Card>
                                <Card.Header as="h5">MATC84</Card.Header>
                                <Card.Body>
                                    <Card.Title>Laboratório de Programação Web</Card.Title>
                                    <Card.Text>
                                        {this.props.chamadaAtiva === null ? "" : `Chamada ativa: ${this.props.chamadaAtiva.createdAt}`}
                                    </Card.Text>
                                    {this.props.chamadaAtiva === null ? 
                                        <></>
                                    :
                                        <Card.Text>
                                            Captcha gerado: {this.props.chamadaAtiva.captcha}
                                        </Card.Text>
                                    }
                                    {this.props.chamadaAtiva === null ? 
                                        <Button variant="primary" onClick={this.handleModal}>Chamada</Button>
                                    :
                                    <>
                                        <Button variant="primary" onClick={() => this.props.viewPresencaModal()}>Lista de Presença</Button>
                                        <Button variant="danger" style={{marginLeft:"15px"}} onClick={() => this.props.encerraChamada(this.props.chamadaAtiva._id)}>Encerrar Chamada</Button>
                                    </>
                                    }
                                    
                                </Card.Body>
                            </Card>

                            <ModalCaptcha createChamada={this.props.createChamada} showModalCaptcha={this.props.showModalCaptcha} handleModal={this.handleModal}/>
                            <ModalPresenca alunos={this.props.alunos} alterarPresenca={this.props.alterarPresenca} showModalPresenca={this.props.showModalPresenca} handleModal={() => this.props.viewPresencaModal}/>

                        </div>
                        :
                        <div>
                            <Header/>
                            <AppNavBar/>

                            {this.props.chamadaAtiva === null ? 
                               <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            Não há chamada ativa
                                        </Card.Text>
                                    </Card.Body>
                                </Card> 
                                :
                                <Card>
                                    <Card.Header as="h5">MATC84</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Laboratório de Programação Web</Card.Title>
                                        <Card.Text>
                                            {this.props.chamadaAtiva.captcha}
                                        </Card.Text>
                                        {/* https://codepen.io/manishjanky/pen/eRNKLL <---------- verificar como mostrar captcha bonito */}
                                    </Card.Body>
                                </Card>
                            }
                        </div>
                    :
                    <Redirect to='/' />
                 }
            </>

        )
    }
}

const mapStateToProps = state => ({
    showModalCaptcha: state.home.showModalCaptcha,
    showModalPresenca: state.home.showModalPresenca,
    chamadaAtiva: state.home.chamadaAtiva,
    chamadas: state.home.chamadas,
    alunos: state.home.alunos,
    logado: state.login.logado,
    usuario: state.login.usuario
});

export default connect(mapStateToProps,{alterarPresenca, createChamada, encerraChamada, obterChamadas, viewModal, viewPresencaModal})(Home);