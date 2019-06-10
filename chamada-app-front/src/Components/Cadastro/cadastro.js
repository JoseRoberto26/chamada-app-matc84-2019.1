import React from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import "./cadastro.css";
import Header from "../Commons/Header";
import {Redirect} from 'react-router'
import {
    alteraFormCadastro
} from '../../Redux/Actions/LoginAction'
import {Formik} from 'formik'

export class Cadastro extends React.Component {

    handleSubmit = (values) => {
        var formBomb = {
            nome: values.nome, 
            matricula: values.matricula,
            senha: values.senha,
            isProfessor: values.isProfessor
        }

        this.props.alteraFormCadastro(formBomb)
        console.log("Valores cadastrados: "+ JSON.stringify(formBomb))
    }

    render() {
        return(
            <div>
                {this.props.cadastrouSucesso ? <Redirect to="/"/> 
                : 
                <>
                    <Header/>

                    <div className="pagina-com-formulario">
                        <Formik
                            initialValues={{
                                nome: '', 
                                matricula: '',
                                senha: '',
                                isProfessor: false
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
                                        type="text"
                                        name="nome"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nome}
                                        placeholder={"Nome"}
                                    />

                                    <input
                                        type="number"
                                        name="matricula"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.matricula}
                                        placeholder={"Matrícula"}
                                    />

                                    <input
                                        type="password"
                                        name="senha"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.senha}
                                        placeholder={"Senha"}
                                    />

                                    <label >É Professor?</label>
                                    <input 
                                        type="checkbox"
                                        name="isProfessor"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.isProfessor}
                                    />

                                    <button type="submit" disabled={isSubmitting}>
                                        Cadastrar
                                    </button>

                                    <p className={"message"}><Link to={"/"}>Voltar</Link></p>
                                </form>
                            )}
                        </Formik>
                    </div>
                </>
                }

                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cadastrouSucesso: state.login.cadastrouSucesso
});

export default connect(mapStateToProps,{alteraFormCadastro})(Cadastro)