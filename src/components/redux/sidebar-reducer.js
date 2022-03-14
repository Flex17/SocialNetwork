const SET_SIDEBAR = 'SET-SIDEBAR'

const initialState = {
    bar: [
        // { id: 1, value: 'Profile', link: '/' },
        // { id: 2, value: 'Messages', link: '/dialogs' },
        // { id: 3, value: 'News', link: '/news' },
        // { id: 4, value: 'Music', link: '/music' },
        // { id: 5, value: 'Settings', link: '/settings' },
        // { id: 6, value: 'Users', link: '/users' }
    ],
    friends: [
        // { id: 1, name: 'Andrew' },
        // { id: 2, name: 'Sasha' },
        // { id: 3, name: 'Alex' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SET_SIDEBAR:
            stateCopy = {
                ...state,
                bar: [...action.bar],
                friends: [...action.friends]
            }
            return stateCopy

        default:
            return state
    }
}

export const setSidebar = (bar, friends) => {
    return {
        type: SET_SIDEBAR,
        bar: [...bar],
        friends: [...friends]
    }
}



export default sidebarReducer