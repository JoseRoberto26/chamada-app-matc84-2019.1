const initialState = {
    professores: [],
    showModalCaptcha: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_PROFESSORES" :
            return {
                ...state,
                professores: action.payload
            }
        case "VIEW_MODAL" :
            return {
                ...state,
                showModalCaptcha: !state.showModalCaptcha
            }
        default:
            return state
    }
}