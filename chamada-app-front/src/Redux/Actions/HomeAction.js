// import axios from 'axios';

// export const getUsuario = () => dispatch => {
//     axios({
//         method: "get",
//         url: "https://api.myjson.com/bins/19hl0p"    // Não é professor: https://api.myjson.com/bins/7z9wp
//                                                     // É professor:     https://api.myjson.com/bins/19hl0p
//     })
//     .then( result => {
//         dispatch({
//             type: "GET_USUARIO",
//             payload: result.data
//         })
//     })
// }

export const viewModal = () => dispatch => {
    dispatch({
        type: "VIEW_MODAL"
    })
}

export const viewPresencaModal = () => dispatch => {
    dispatch({
        type: "VIEW_PRESENCA_MODAL"
    })
}

export const createChamada = (captcha) => dispatch => {
    dispatch({
        type: "CREATE_CHAMADA",
        payload: {"captcha":captcha, "data": "13/11/19"}
    })
}

export const encerraChamada = () => dispatch => {
    dispatch({
        type: "END_CHAMADA"
    })
}

export const alterarPresenca = (id) => dispatch => {
    dispatch({
        type: "ALTERAR_PRESENCA",
        payload: id
    })
}