import axios from 'axios';

export const getProfessores = () => dispatch => {
    axios({
        method: "get",
        url: "https://api.myjson.com/bins/f18ez"
    })
    .then( result => {
        dispatch({
            type: "GET_PROFESSORES",
            payload: result.data
        })
    })
}

export const viewModal = () => dispatch => {
    dispatch({
        type: "VIEW_MODAL"
    })
}