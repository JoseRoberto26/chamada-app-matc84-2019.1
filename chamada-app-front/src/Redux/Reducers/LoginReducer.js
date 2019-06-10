const initialState = {
    usuario: {},
    logado: false,
    cadastrouSucesso: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EFETUAR_LOGIN':
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
                ...state,
                cadastrouSucesso: true
            }
        default:
            return state
    }
   }