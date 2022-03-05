const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I`m fine' },
        { id: 4, message: 'I`m too' },
    ],
    dialogs: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Lera' },
        { id: 3, name: 'Egor' },
        { id: 4, name: 'Dima' },
        { id: 5, name: 'Maxim' },
        { id: 6, name: 'Sasha' },
    ],
    newMessageText: ''
}

const messageReducer = (state = initialState, action) => {
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