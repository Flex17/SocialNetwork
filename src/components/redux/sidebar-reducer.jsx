const GET_SIDEBAR = 'GET-SIDEBAR'

const sidebarReducer = (state, action) => {
    switch (action.type) {
        case GET_SIDEBAR:

            return state

        default:
            return state
    }
}

export const getSidebarActionCreator = () => {
    return {
        type: GET_SIDEBAR
    }
}

export default sidebarReducer