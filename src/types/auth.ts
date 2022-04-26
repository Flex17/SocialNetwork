export enum authActionTypes {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
}

type dataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean | null
}

type setAuthUserDataType = {
    type: authActionTypes.SET_AUTH_USER_DATA
    data: dataType
}

export type authActionsType = setAuthUserDataType