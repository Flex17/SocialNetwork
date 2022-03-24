const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export const setAuthUserData = (id, login, email, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: { id, login, email, isAuth }
    }
}

export default authReducer