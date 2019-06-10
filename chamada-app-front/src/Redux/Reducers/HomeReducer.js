const initialState = {
    chamadaAtiva: null,
    chamadas: null,
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
                alunos: // MOCKADO
                [
                    {
                        "id": "1",
                        "aluno": "Lucas",
                        "presenca": false
                    },
                    {
                        "id": "2",
                        "aluno": "José",
                        "presenca": false
                    }
                ]
            }
        case "END_CHAMADA" :
            return {
                ...state,
                chamadaAtiva: null
            }
        case "GET_ALL_CHAMADAS" :
            return {
                ...state,
                chamadas: action.payload
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