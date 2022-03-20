const SET_CURRENT_ID = 'SET_CURRENT_ID'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    name: 'Vlad',
    about: 'I`m junior frontend developer',
    contacts: 'https://github.com/Flex17',
    currentId: undefined,
    isLookingForAJob: true,
    lookingForAJobDescription: 'Let`s send me offer'
}

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SET_CURRENT_ID: {
            stateCopy = {
                ...state,
                currentId: action.currentId
            }
            return stateCopy
        }

        case SET_USER_PROFILE: {
            return stateCopy = {
                ...state,
                name: action.name,
                about: action.about,
                isLookingForAJob: action.isLookingForAJob,
                lookingForAJobDescription: action.lookingForAJobDescription,
                contacts: action.contacts
            }
        }

        default:
            return state
    }
}

export const setCurrendId = (id) => {
    return {
        type: SET_CURRENT_ID,
        currentId: id
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