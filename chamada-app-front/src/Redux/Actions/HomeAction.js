// import axios from 'axios';

// export const getUsuario = () => dispatch => {
//     axios({
//         method: "get",
//         url: "https://api.myjson.com/bins/7z9wp"    // Não é professor: https://api.myjson.com/bins/7z9wp
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