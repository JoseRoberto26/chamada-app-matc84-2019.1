import React from 'react'
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import "./cadastro.css";
import Header from "../Commons/Header";

export class Cadastro extends React.Component {
    render() {
        return(
            <div>
                <Header/>

                <div className="pagina-com-formulario">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="Nome"/>
                            <input type="number" placeholder="Matricula"/>
                            <input type="number" placeholder="CPF"/>
                            <input type="password" placeholder="Senha"/>
                            <Button>
                                <input type="submit" value="CADASTRAR"/>
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