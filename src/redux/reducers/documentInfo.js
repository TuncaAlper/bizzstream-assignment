import {
    GET_LAYOUT,
    GET_DATA,
    SAVE_DATA
} from '../actions/documentInfo'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LAYOUT:
            return { ...state, layout: action.payload }
        case GET_DATA:
            return { ...state, data: action.payload }
        case SAVE_DATA:
            return { ...state, data: action.payload }
        default:
            return state
    }
}