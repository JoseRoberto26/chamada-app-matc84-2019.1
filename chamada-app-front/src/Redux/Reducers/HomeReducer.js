const initialState = {
    showModalCaptcha: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "VIEW_MODAL" :
            return {
                ...state,
                showModalCaptcha: !state.showModalCaptcha
            }
        default:
            return state
    }
}