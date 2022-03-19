const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS'

const initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
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
                users: [...action.users]
            }
            return stateCopy

        case SET_CURRENT_PAGE:
            return stateCopy = {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return stateCopy = {
                ...state,
                totalUsersCount: action.count
            }

        case CHANGE_LOADING_STATUS:
            return stateCopy = {
                ...state,
                isLoading: action.isLoading
            }

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

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCountActionCreator = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: count
    }
}

export const changeLoadingStatusActionCreator = (isLoading) => {
    return {
        type: CHANGE_LOADING_STATUS,
        isLoading: isLoading
    }
}

export default usersReducer