const initialState = {
    usuario: {},
    logado: false,
    usuarioCadastro: {
        nome: {
            value: ''
        },
        matricula: {
            value: ''
        },
        senha: {
            value: ''
        },
        isProfessor: {
            value: false
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EFETUAR_LOGIN':
            return {
                usuario: action.payload,
                logado:true
            }
        case 'EFETUAR_LOGOUT':
            return {
                usuario: {},
                logado: false
            }
        case 'ALTERA_FORM':
            let formAux = state.usuarioCadastro
            formAux[action.payload.name] = action.payload.value
            return {
                usuarioCadastro: formAux
            }
        default:
            return state
    }
   }