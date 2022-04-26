import {
    stateType,
    profileActionTypes,
    dataType,
    profileActions
} from '../../types/profile.ts'

const initialState: stateType = {
    name: 'Vlad',
    about: 'I`m junior frontend developer',
    contacts: 'https://github.com/Flex17',
    isLookingForAJob: true,
    lookingForAJobDescription: 'Let`s send me offer'
}

const profileReducer = (state = initialState, action: profileActions): stateType => {

    switch (action.type) {
        case profileActionTypes.SET_USER_PROFILE:
            return {
                ...state,
                name: action.name,
                about: action.about,
                isLookingForAJob: action.isLookingForAJob,
                lookingForAJobDescription: action.lookingForAJobDescription,
                contacts: action.contacts
            }
        default:
            return state
    }
}

export const setUserProfile = (data: dataType): profileActions => {
    return {
        type: profileActionTypes.SET_USER_PROFILE,
        name: data.fullName,
        about: data.aboutMe,
        isLookingForAJob: data.lookingForAJob,
        lookingForAJobDescription: data.lookingForAJobDescription,
        contacts: data.contacts.github
    }
}

export default profileReducer