import { authActionsType } from "../../types/auth"
import { authActionTypes } from "../../types/auth.ts"

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean | null
}

type stateType = typeof initialState

const authReducer = (state = initialState, action): stateType => {
    switch (action.type) {
        case authActionTypes.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export const setAuthUserData = (id, login, email, isAuth): authActionsType => {
    return {
        type: authActionTypes.SET_AUTH_USER_DATA,
        data: { id, login, email, isAuth }
    }
}

export default authReducer