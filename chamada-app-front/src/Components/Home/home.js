import React from "react";
import Header from "../Commons/Header";
import AppNavBar from "../Commons/AppNavBar";
import { connect } from 'react-redux';
import {Redirect} from 'react-router'
import { Button, Card } from "react-bootstrap";
import {
    getProfessores,
    viewModal
} from "../../Redux/Actions/HomeAction"
import ModalCaptcha from '../Commons/ModalCaptcha'

export class Home extends React.Component {

    handleModal = () => {
        this.props.viewModal()
    }

    render() {

        return(

            <>
                {/*{this.props.logado ?*/}
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

                        <ModalCaptcha showModalCaptcha={this.props.showModalCaptcha} handleModal={this.handleModal}/>

                    </div>

                     {/*:*/}

                     {/*<Redirect to='/' />*/}
                 {/*}*/}
            </>

        )
    }
}

const mapStateToProps = state => ({
    professores: state.home.professores,
    showModalCaptcha: state.home.showModalCaptcha,
    logado: state.login.logado
});

export default connect(mapStateToProps,{getProfessores, viewModal})(Home);