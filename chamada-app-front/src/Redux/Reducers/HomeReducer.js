const initialState = {
    chamadaAtiva: null,
    presencas: null,
    showModalCaptcha: false,
    showModalPresenca: false,
    presencaRegistrada: false,
    chamadaRetornou: false
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
            let chamadaAtivaAux = null
            var indiceChamada = chamadas.findIndex(chamada => (chamada.hasExpired === false));
            if (chamadas[indiceChamada] !== undefined) {
                chamadaAtivaAux = chamadas[indiceChamada]
            }
            return {
                ...state,
                chamadaAtiva: chamadaAtivaAux
            }
        case "CREATE_PRESENCA" :
            return {
                ...state,
                presencaRegistrada: true
            }
        case "RECEBE_PRESENCA" :
            return {
                ...state,
                presencaRegistrada: true
            }
        case "GET_ALL_PRESENCAS" :
            let presencaAux = action.payload
            if(presencaAux.length === 0){
                presencaAux = null
            }
            return {
                ...state,
                presencas: presencaAux,
                chamadaRetornou: true
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