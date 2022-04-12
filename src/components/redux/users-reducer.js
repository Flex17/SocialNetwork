const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';
const CHANGE_FOLLOWING_PROGRESS = 'CHANGE_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case CHANGE_LOADING_STATUS:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case CHANGE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isLoading ?
                    [
                        ...state.followingInProgress,
                        action.id
                    ]
                    :
                    state.followingInProgress.filter(id => {
                        return id !== action.id
                    })
            }

        default:
            return state
    }
}

export const follow = (id) => {
    return {
        type: FOLLOW,
        id: id,
        followed: true
    }
}

export const unFollow = (id) => {
    return {
        type: UNFOLLOW,
        id: id,
        followed: false
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: [...users]
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: count
    }
}

export const changeLoadingStatus = (isLoading) => {
    return {
        type: CHANGE_LOADING_STATUS,
        isLoading: isLoading
    }
}

export const changeFollowingProgress = (isLoading, id) => {
    return {
        type: CHANGE_FOLLOWING_PROGRESS,
        isLoading: isLoading,
        id: id
    }
}

export default usersReducer