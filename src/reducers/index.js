import { GET_DATA } from '../actions/index'

const words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const reducer = (state,action) => {
    switch (action.type) {
        case GET_DATA:
        const result = action.data.filter(user => user.id <= 5)
        console.log(result);
        return { ...state, user_data: result }
        default:
        return state
    }
}

export default reducer