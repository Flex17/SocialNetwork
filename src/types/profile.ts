export type stateType = {
    name: string
    about: string
    contacts: string
    isLookingForAJob: boolean
    lookingForAJobDescription: string
}

export enum profileActionTypes {
    SET_USER_PROFILE = 'SET_USER_PROFILE'
}

type setUserProfileActionType = {
    type: profileActionTypes.SET_USER_PROFILE
    name: string
    about: string
    contacts: string
    isLookingForAJob: boolean
    lookingForAJobDescription: string
}

type contactsType = {
    github: string
}

export type dataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: contactsType
}

export type profileActions = setUserProfileActionType