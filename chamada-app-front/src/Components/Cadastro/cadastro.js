import React from 'react'
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import "./cadastro.css";
import Header from "../Commons/Header";
import {
    alteraFormCadastro
} from '../../Redux/Actions/LoginAction'

export class Cadastro extends React.Component {

    handleChange = (event) => {
        console.log("entrei")
        const name = event.target.name;
        const value = event.target.value;

        this.props.alteraFormCadastro(name, value)
    }

    handleSubmit = () => {
        console.log("handlesubmit")
    }


    render() {
        return(
            <div>
                <Header/>

                <div className="pagina-com-formulario">
                    <div className="form">
                        <form className="login-form" onSubmit={() => this.handleSubmit}>
                            <input type="text"
                                   name="nome"
                                   value={this.props.usuarioCadastro.nome.value}
                                   onChange={() => this.handleChange}
                                   placeholder={"Nome"}
                            />

                            <input type="number"
                                   name="matricula"
                                   value={this.props.usuarioCadastro.matricula.value}
                                   onChange={() => this.handleChange}
                                   placeholder={"Matricula"}
                            />

                            <input type="password"
                                   name="senha"
                                   value={this.props.usuarioCadastro.senha.value}
                                   onChange={() => this.handleChange}
                                   placeholder={"Senha"}
                            />

                            <label >É Professor?</label>
                            <input type="checkbox"
                                   name="isProfessor"
                                   value={this.props.usuarioCadastro.isProfessor.value}
                                   onChange={() => this.handleChange}
                            />

                            <Button>
                                <input type="submit" value="Cadastrar"/>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    usuarioCadastro: state.login.usuarioCadastro
});

export default connect(mapStateToProps,{alteraFormCadastro})(Cadastro)