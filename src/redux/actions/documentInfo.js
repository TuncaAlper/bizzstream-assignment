export const GET_LAYOUT = "GET_LAYOUT"
export const GET_DATA = "GET_DATA"
export const SAVE_DATA = "SAVE_DATA"

export const getLayout = (layout) => {
    return {
        type: GET_LAYOUT,
        payload: layout
    }
}

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
}

export const saveData = (data) => {
    return {
        type: SAVE_DATA,
        payload: data
    }
}