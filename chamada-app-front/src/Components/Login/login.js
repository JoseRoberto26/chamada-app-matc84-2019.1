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

    handleSubmit = (props) => {
        console.log(props)
        console.log("entrei")
    }

    render() {
       
        return(
            <div>
                <Header/>

                <div className="pagina-com-formulario">
                    <div className="form">
                        <form className="login-form" onSubmit={() => this.handleSubmit()}>
                            <input type="text" placeholder="Número de matrícula"/>
                            <input type="password" placeholder="Senha"/>
                            <Link to={"/home"}>
                                <button>
                                    <input type={"submit"} value={"Entrar"}/>
                                </button>
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