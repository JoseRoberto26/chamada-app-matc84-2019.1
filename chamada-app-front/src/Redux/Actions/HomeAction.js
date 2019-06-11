import axios from 'axios';

const backUrl = "http://localhost:3001/api"

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
    return axios({
        method: "POST",
        url: `${backUrl}/chamada/criar`,
        headers: {
            "content-type": "application/json",
            "content-version": "1"
        },
        data: {captcha: captcha}
    }).then(response => {
        dispatch({
            type: 'CREATE_CHAMADA',
            payload: response.data
        })
    })
}

export const encerraChamada = (chamada_id) => dispatch => {
    axios({
        method: "PUT",
        url: `${backUrl}/chamada/encerrar`,
        headers: {
            "content-type": "application/json",
            "content-version": "1"
        },
        data: {chamada_id : chamada_id}
    }).then(response => {
        dispatch({
            type: 'END_CHAMADA'
        })
    })
}

export const obterChamadas = () => dispatch => {
    axios({
        method: "GET",
        url: `${backUrl}/chamada/allChamadas`,
        headers: {
            'content-type': 'application/json'
        }
    }).then(result => {
        dispatch({
            type: 'GET_ALL_CHAMADAS',
            payload: result.data.data
        })
    })
}

export const alterarPresenca = (id) => dispatch => {
    dispatch({
        type: "ALTERAR_PRESENCA",
        payload: id
    })
}