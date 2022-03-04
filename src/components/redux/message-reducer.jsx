const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const text = state.newMessageText;
            const messagesArray = state.messages;

            if (text !== '') {
                const newMessage = {
                    id: messagesArray[messagesArray.length - 1].id + 1,
                    message: text
                }

                state.messages.push(newMessage)
                messageReducer(state, { type: UPDATE_NEW_MESSAGE_TEXT, newText: '' })
            }
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            const messageText = action.newText;

            state.newMessageText = messageText;
            return state

        default:
            return state
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

export default messageReducer