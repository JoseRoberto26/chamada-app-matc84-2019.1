import React from 'react';
import { connect } from 'react-redux';
import {
    efetuarLogin
} from '../../Redux/Actions/LoginAction';
import '../../bootstrap.css'
import './login.css'
import logo from './logo.svg'
import {Link} from 'react-router-dom'

export class Login extends React.Component {

    render() {
       
        return(
            <>
                <div class="header">
                    <img src={logo} alt="PresençaFácil" />
                </div>

                <div class="pagina-com-formulario">
                    <div class="form">
                        <form class="login-form">
                            <input type="text" placeholder="CPF"/>
                            <input type="password" placeholder="Senha"/>
                            <button onclick="Login()">entrar</button>
                            <p class="message">Não está registrado? <Link to={"/"}>Cadastre-se aqui</Link></p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    
}

Login.propTypes = {

};

const mapStateToProps = state => ({
    jojo: state.login.jojo
});

export default connect(mapStateToProps,{efetuarLogin})(Login);