import { connect } from "react-redux";

import { addMessageActionCreator, setMessagesPageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    const messagesPage = state.messagesPage
    return {
        dialogs: messagesPage.dialogs,
        messages: messagesPage.messages,
        newMessageText: messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            const addMessageAction = addMessageActionCreator()
            const updateNewMessageTextAction = updateNewMessageTextActionCreator('')

            dispatch(addMessageAction)
            dispatch(updateNewMessageTextAction)
        },

        onMessageChange: (text) => {
            const updateNewMessageTextAction = updateNewMessageTextActionCreator(text)

            dispatch(updateNewMessageTextAction)
        },

        onSetMessagesPage: (messages, dialogs) => {
            const setMessagesPageAction = setMessagesPageActionCreator(messages, dialogs)

            dispatch(setMessagesPageAction)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer