import React from "react";
import Header from "../Commons/Header";
import AppNavBar from "../Commons/AppNavBar";
import { connect } from 'react-redux';
import {Redirect} from 'react-router'
import { Button, Card } from "react-bootstrap";
import {
    viewModal
} from "../../Redux/Actions/HomeAction"
import ModalCaptcha from '../Commons/ModalCaptcha'

export class Home extends React.Component {

    handleModal = () => {
        this.props.viewModal()
    }

    // componentWillMount = () => {
    // }

    render() {
console.log("Usuario: "+ JSON.stringify(this.props.usuario) )
        return(

            <>
                {this.props.logado ?
                    this.props.usuario.isProfessor ? 
                        <div>
                            <Header/>
                            <AppNavBar/>

                            <Card>
                                <Card.Header as="h5">MATC84</Card.Header>
                                <Card.Body>
                                    <Card.Title>Laboratório de Programação Web</Card.Title>
                                    <Card.Text>
                                        32/02/2019 - Segunda
                                    </Card.Text>
                                    <Card.Text>
                                        Horário: 20:20-22:10
                                    </Card.Text>
                                    <Button variant="primary" onClick={this.handleModal}>Chamada</Button>
                                </Card.Body>
                            </Card>

                            <ModalCaptcha isProfessor={this.props.professores} showModalCaptcha={this.props.showModalCaptcha} handleModal={this.handleModal}/>

                        </div>
                        :
                        <div>
                            <Header/>
                            <AppNavBar/>

                            <Card>
                                <Card.Header as="h5">MATC84</Card.Header>
                                <Card.Body>
                                    <Card.Title>Laboratório de Programação Web</Card.Title>
                                    <Card.Text>
                                        32/02/2019 - Segunda
                                    </Card.Text>
                                    <Card.Text>
                                        Horário: 20:20-22:10
                                    </Card.Text>
                                    <Button variant="primary" onClick={this.handleModal}>Atender Chamada</Button>
                                </Card.Body>
                            </Card>

                            <ModalCaptcha isProfessor={this.props.professores} showModalCaptcha={this.props.showModalCaptcha} handleModal={this.handleModal}/>

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
    logado: state.login.logado,
    usuario: state.login.usuario
});

export default connect(mapStateToProps,{viewModal})(Home);