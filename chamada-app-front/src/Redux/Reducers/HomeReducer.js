const initialState = {
    professores: [],
    showModalCaptcha: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_PROFESSORES" :
            console.log(action.payload)
            return {
                professores: action.payload
            }
        case "VIEW_MODAL" :
            return {
                showModalCaptcha: !state.showModalCaptcha
            }
        default:
            return state
    }
}