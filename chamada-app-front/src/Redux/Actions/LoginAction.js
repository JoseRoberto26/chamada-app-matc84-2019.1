import axios from 'axios'

const backUrl = "http://localhost:3001/api"

export const efetuarLogin = (matricula, senha) => dispatch => {
    axios({
        method: "GET",
        url: `${backUrl}/usuario/login?matricula=${matricula}&senha=${senha}`,
        headers: {
            'content-type': 'application/json'
        }
    }).then(result => {
        dispatch({
            type: 'EFETUAR_LOGIN',
            payload: result.data
        })
    }, error => {
        alert("Usuário já existe!")
    })
}

export const efetuarLogout = () => dispatch => {
    dispatch({
        type: 'EFETUAR_LOGOUT'
    })
}

export const alteraFormCadastro = (formObject) => dispatch => {
    return axios({
        method: "POST",
        url: `${backUrl}/usuario/cadastrar`,
        headers: {
            "content-type": "application/json",
            "content-version": "1"
        },
        data: JSON.stringify(formObject)
    }).then(response => {
        dispatch({
            type: 'ALTERA_FORM',
            payload: response
        })
    }, error => {
        alert("Usuário já existe!")
    })
}