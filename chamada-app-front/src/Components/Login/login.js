import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {
    efetuarLogin
} from '../../Redux/Actions/LoginAction';
import '../../bootstrap.css'
import './login.css'
import Header from "../Commons/Header"

export class Login extends React.Component {

    render() {
       
        return(
            <div>
                <Header/>

                <div className="pagina-com-formulario">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" placeholder="CPF"/>
                            <input type="password" placeholder="Senha"/>
                            <Link to={"/disciplinas"}>
                                <button>entrar</button>
                            </Link>
                            <p className="message">Não está registrado? <Link to={"/cadastro"}>Cadastre-se aqui</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

Login.propTypes = {

};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps,{efetuarLogin})(Login);