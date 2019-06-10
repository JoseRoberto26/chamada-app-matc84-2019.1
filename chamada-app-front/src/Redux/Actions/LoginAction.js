import axios from 'axios'

// export const efetuarLogin = (matricula, senha) => dispatch => {
//     // axios({
//     //     method: "get",
//     //     url: "http://localhost:3001/login?matricula="+matricula+"senha="+senha,
//     //     data: JSON.stringify()
//     // }).then(
//         dispatch({
//             type: 'EFETUAR_LOGIN'
//         })
//     // ).catch(
//     //     alert("Usuário não existe!")
//     // )

// }

export const getUsuario = () => dispatch => {
    axios({
        method: "get",
        url: "https://api.myjson.com/bins/19hl0p"       // Não é professor: https://api.myjson.com/bins/7z9wp
                                                        // É professor:     https://api.myjson.com/bins/19hl0p
    })
    .then( result => {
        dispatch({
            type: "EFETUAR_LOGIN", // GET_USUARIO
            payload: result.data
        })
    })
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