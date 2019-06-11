const initialState = {
    chamadaAtiva: null,
    alunos: null,
    showModalCaptcha: false,
    showModalPresenca: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_CHAMADA" :
            return {
                ...state,
                chamadaAtiva: action.payload,
                showModalCaptcha: false,
            }
        case "END_CHAMADA" :
            return {
                ...state,
                chamadaAtiva: null
            }
        case "GET_ALL_CHAMADAS" :
            var chamadas = action.payload
            console.log(chamadas)
            let chamadaAtivaAux = null
            var indiceChamada = chamadas.findIndex(chamada => (chamada.hasExpired === false));
            if (chamadas[indiceChamada] !== undefined) {
                chamadaAtivaAux = chamadas[indiceChamada]
            }
            return {
                ...state,
                chamadaAtiva: chamadaAtivaAux
            }
        case "ALTERAR_PRESENCA" :
            let alunosAux = state.alunos
            const indice = alunosAux.findIndex(aluno => (aluno.id === action.payload))    // pega pelo id do aluno
            alunosAux[indice].presenca = !state.alunos.presenca
            console.log(alunosAux)
            return {
                ...state,
                alunos: alunosAux
            }
        case "VIEW_MODAL" :
            return {
                ...state,
                showModalCaptcha: !state.showModalCaptcha
            }
        case "VIEW_PRESENCA_MODAL" :
            return {
                ...state,
                showModalPresenca: !state.showModalPresenca
            }
        default:
            return state
    }
}