const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    name: 'Vlad',
    about: 'I`m junior frontend developer',
    contacts: 'https://github.com/Flex17',
    isLookingForAJob: true,
    lookingForAJobDescription: 'Let`s send me offer'
}

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SET_USER_PROFILE:
            // eslint-disable-next-line no-unused-vars
            return stateCopy = {
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

export const setUserProfile = (data) => {
    return {
        type: SET_USER_PROFILE,
        name: data.fullName,
        about: data.aboutMe,
        isLookingForAJob: data.lookingForAJob,
        lookingForAJobDescription: data.lookingForAJobDescription,
        contacts: data.contacts.github
    }
}

export default profileReducer