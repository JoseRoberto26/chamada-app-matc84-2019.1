const initialState = {
    jojo: 'ora ora ora'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EFETUAR_LOGIN':
            return {
                jojo: action.payload
            }
        default:
            return state
    }
   }