import React from "react";
import Header from "../Commons/Header";
import AppNavBar from "../Commons/AppNavBar";
import { connect } from 'react-redux';
import {Redirect} from 'react-router'
import { Button, Card } from "react-bootstrap";
import {
    alterarPresenca,
    criarPresenca,
    obterPresencas,
    receberPresenca,
    createChamada,
    encerraChamada,
    obterChamadas,
    viewModal,
    viewPresencaModal
} from "../../Redux/Actions/HomeAction"
import ModalCaptcha from '../Commons/ModalCaptcha'
import ModalPresenca from '../Commons/ModalPresenca'
import {Formik} from 'formik'

export class Home extends React.Component {

    handleModal = () => {
        this.props.viewModal()
    }

    handleSubmit = (values) => {
        if(this.props.chamadaAtiva.captcha === values.captcha) {
            this.props.criarPresenca(this.props.usuario, this.props.chamadaAtiva)
        }
    }

    componentWillMount = () => {
        this.props.obterChamadas()
        
    }

    componentDidMount = () => {
        
    }

    render() {
// console.log("Usuario: "+ JSON.stringify(this.props.usuario) )
// console.log("Chamada Ativa: "+JSON.stringify(this.props.chamadaAtiva))
// console.log("Alunos: "+JSON.stringify(this.props.alunos))
// console.log("CHAMADA: "+JSON.stringify(this.props.chamadaAtiva))
// console.log("PRESENCA: "+JSON.stringify(this.props.presencas))
        return(
            <>
                {this.props.chamadaAtiva !== null && !this.props.chamadaRetornou ? this.props.obterPresencas(this.props.chamadaAtiva._id) : <></>}
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
                            <ModalPresenca presencas={this.props.presencas} alterarPresenca={this.props.alterarPresenca} showModalPresenca={this.props.showModalPresenca} handleModal={() => this.props.viewPresencaModal}/>

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
                                <div className="pagina-com-formulario">
                                   
                                    <Formik
                                        initialValues={{
                                            captcha: '',
                                            }}
                                        onSubmit={this.handleSubmit}
                                        >
                                        {({
                                            values,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                        }) => (
                                            <form onSubmit={handleSubmit}>
                                                <label>{this.props.chamadaAtiva.captcha}</label>
                                                <input
                                                    type="text"
                                                    name="captcha"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.captcha}
                                                    placeholder={"Captcha"}
                                                />
            
                                                <button type="submit" disabled={isSubmitting}>
                                                    Criar presença
                                                </button>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
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
    presencas: state.home.presencas,
    presencaRegistrada: state.home.presencaRegistrada,
    chamadaRetornou: state.home.chamadaRetornou,
    logado: state.login.logado,
    usuario: state.login.usuario
});

export default connect(mapStateToProps,{alterarPresenca, criarPresenca, obterPresencas, receberPresenca, createChamada, encerraChamada, obterChamadas, viewModal, viewPresencaModal})(Home);