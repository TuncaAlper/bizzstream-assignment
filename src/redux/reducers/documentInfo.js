import {
    GET_LAYOUT,
    GET_DATA,
    SAVE_DATA
} from '../actions/documentInfo'
import layout from '../../data/layout.json'
import definition from '../../data/definition.json'

const initialState = { layout, definition }

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LAYOUT:
            return { ...state, layout: action.payload }
        case GET_DATA:
            return { ...state, definition: action.payload }
        case SAVE_DATA:
            return { ...state, definition: action.payload }
        default:
            return state
    }
}