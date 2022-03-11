const initialState = {
    bar: [
        { id: 1, value: 'Profile', link: '/' },
        { id: 2, value: 'Messages', link: '/dialogs' },
        { id: 3, value: 'News', link: '/news' },
        { id: 4, value: 'Music', link: '/music' },
        { id: 5, value: 'Settings', link: '/settings' },
        { id: 6, value: 'Users', link: '/users' }
    ],
    friends: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Alex' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}



export default sidebarReducer