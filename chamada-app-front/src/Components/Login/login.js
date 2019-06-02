import React from 'react';
import { connect } from 'react-redux';
import {
    efetuarLogin
} from '../../Redux/Actions/LoginAction'

export class Login extends React.Component {

    render() {
       
        return(
            <div>
                <button type="button" onClick={() => this.props.efetuarLogin()} >Click Me!</button>
                <span>{this.props.jojo}</span>
            </div>
        )
    }
    
}

Login.propTypes = {

};

const mapStateToProps = state => ({
    jojo: state.login.jojo
});

export default connect(mapStateToProps,{efetuarLogin})(Login);