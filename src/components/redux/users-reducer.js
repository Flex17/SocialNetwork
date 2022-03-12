const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        // { id: 1, name: 'Vlad', surname: 'Platov', status: 'I`m fine', country: 'Russia', city: 'Kurgan', followed: false },
        // { id: 2, name: 'Alex', surname: 'Ivanov', status: 'I`m fine', country: 'Ukraine', city: 'Kiev', followed: false },
        // { id: 3, name: 'Egor', surname: 'Petrov', status: 'I`m fine', country: 'Belarus', city: 'Minsk', followed: false },
        // { id: 4, name: 'Andrey', surname: 'Sidorov', status: 'I`m fine', country: 'Russia', city: 'Kurgan', followed: false }
    ]
}

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case FOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, followed: !user.followed }
                    }
                    return user
                })
            }

            return stateCopy
        case SET_USERS:
            stateCopy = {
                ...state,
                users: [...state.users, ...action.users]
            }
            return stateCopy

        default:
            return state
    }
}

export const followActionCreator = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: [...users]
    }
}

export default usersReducer