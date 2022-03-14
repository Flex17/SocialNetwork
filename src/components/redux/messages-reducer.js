const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SET_MESSAGES_PAGE = 'SET-MESSAGES-PAGE'

const initialState = {
    messages: [],
    dialogs: [],
    newMessageText: ''
}

const messageReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            const text = state.newMessageText;
            const messagesArray = state.messages;

            if (text !== '') {
                const newMessage = {
                    id: messagesArray[messagesArray.length - 1].id + 1,
                    message: text
                }

                stateCopy = {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            }
            return stateCopy
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            const messageText = action.newText;

            stateCopy = {
                ...state,
                newMessageText: messageText
            }

            return stateCopy
        }

        case SET_MESSAGES_PAGE: {
            return stateCopy = {
                ...state,
                messages: [...action.messages],
                dialogs: [...action.dialogs]
            }
        }

        default: {
            return state
        }
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export const setMessagesPageActionCreator = (messages, dialogs) => {
    return {
        type: SET_MESSAGES_PAGE,
        messages: [...messages],
        dialogs: [...dialogs]
    }
}

export default messageReducer