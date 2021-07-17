import { GET_DATA } from '../actions/index'
import { GET_TODODATA } from '../actions/index'

const words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const reducer = (state,action) => {
    switch (action.type) {
        case GET_DATA:
        const result = action.data.filter(user => user.id <= 5)
        console.log(result);
        return { ...state, user_data: result }
        default:
        return state

                case GET_TODODATA:
                console.log(action.data);
                return { ...state, comment_data: action.data}
    }
}

export default reducer