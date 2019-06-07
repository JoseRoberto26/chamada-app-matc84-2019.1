import axios from 'axios'

export const efetuarLogin = (matricula, senha) => dispatch => {
    // axios({
    //     method: "get",
    //     url: "http://localhost:3001/login?matricula="+matricula+"senha="+senha,
    //     data: JSON.stringify()
    // }).then(
        dispatch({
            type: 'EFETUAR_LOGIN'
        })
    // ).catch(
    //     alert("Usuário não existe!")
    // )

}

export const efetuarLogout = () => dispatch => {
    dispatch({
        type: 'EFETUAR_LOGOUT'
    })
}

export const alteraFormCadastro = (formObject) => dispatch => {
    dispatch({
        type: 'ALTERA_FORM',
        payload: {formObject}
    })
}