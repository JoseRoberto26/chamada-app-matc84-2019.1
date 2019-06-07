const initialState = {
    usuario: {},
    logado: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EFETUAR_LOGIN':
        console.log(state.logado)
            return {
                ...state,
                usuario: action.payload,
                logado:true
            }
        case 'EFETUAR_LOGOUT':
            return {
                ...state,
                usuario: {},
                logado: false
            }
        case 'ALTERA_FORM':
            return {
                ...state
            }
        default:
            return state
    }
   }