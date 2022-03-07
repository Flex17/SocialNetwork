import React from "react";
import StoreContext from "../../../store-context";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().messagesPage
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                        store.dispatch(updateNewMessageTextActionCreator(''))
                    }

                    const updateNewMessageText = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
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
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer