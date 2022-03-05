const GET_SIDEBAR = 'GET-SIDEBAR'

const initialState = {
    bar: [
        { id: 1, value: 'Profile', link: '/profile' },
        { id: 2, value: 'Messages', link: '/dialogs' },
        { id: 3, value: 'News', link: '/news' },
        { id: 4, value: 'Music', link: '/music' },
        { id: 5, value: 'Settings', link: '/settings' }
    ],
    friends: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Alex' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
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