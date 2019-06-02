import React from 'react'
import {connect} from "react-redux";
import logo from "../Login/logo.svg";
import {Button} from "react-bootstrap";
import "./cadastro.css"

export class Cadastro extends React.Component {
    render() {
        return(
            <div>
                <div className="header">
                    <img src={logo} alt="PresençaFácil"/>
                </div>

                <div className="pagina-com-formulario">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="Nome"/>
                            <input type="number" placeholder="Matricula"/>
                            <input type="number" placeholder="CPF"/>
                            <input type="password" placeholder="Senha"/>
                            <Button>
                                <input type="submit"></input>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps,{})(Cadastro)