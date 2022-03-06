import React from "react";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().messagesPage
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
        props.store.dispatch(updateNewMessageTextActionCreator(''))
    }

    const updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    const getDialogs = () => {
        return state.dialogs
    }

    const getMessages = () => {
        return state.messages
    }

    const getNewMessageText = () => {
        return state.newMessageText
    }

    return (
        <Dialogs
            onAddMessage={addMessage}
            onMessageChange={updateNewMessageText}
            onGetDialogs={getDialogs}
            onGetMessages={getMessages}
            onGetNewMessageText={getNewMessageText} />
    )
}

export default DialogsContainer