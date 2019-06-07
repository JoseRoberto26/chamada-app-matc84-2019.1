import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import {
    efetuarLogin
} from '../../Redux/Actions/LoginAction';
import '../../bootstrap.css'
import './login.css'
import Header from "../Commons/Header"
import {Formik} from 'formik'

export class Login extends React.Component {

    handleSubmit = (values) => {
        console.log(values)
        this.props.efetuarLogin(values.matricula, values.senha)
    }

    render() {
        return(
            <div>

                {this.props.logado ? 
                <Redirect to={"/home"}/>
                : 
                <>

                    <Header/>

                    <div className="pagina-com-formulario">

                        <Formik
                            initialValues={{
                                matricula: '',
                                senha: '',
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
                                    <input
                                        type="number"
                                        name="matricula"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.matricula}
                                        placeholder={"Número de matrícula"}
                                    />

                                    <input
                                        type="password"
                                        name="senha"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.senha}
                                        placeholder={"Senha"}
                                    />

                                    <button type="submit" disabled={isSubmitting}>
                                        Entrar
                                    </button>

                                    <p className="message">Não está registrado? <Link to={"/cadastro"}>Cadastre-se aqui</Link></p>
                                </form>
                            )}
                        </Formik>
                    </div>
                </>}
            </div>
        )
    }
    
}

Login.propTypes = {

};

const mapStateToProps = state => ({
    logado: state.login.logado
});

export default connect(mapStateToProps,{efetuarLogin})(Login);