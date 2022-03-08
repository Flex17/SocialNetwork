import { connect } from "react-redux";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().messagesPage
//                     const addMessage = () => {
//                         store.dispatch(addMessageActionCreator())
//                         store.dispatch(updateNewMessageTextActionCreator(''))
//                     }

//                     const updateNewMessageText = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text))
//                     }

//                     const getDialogs = () => {
//                         return state.dialogs
//                     }

//                     const getMessages = () => {
//                         return state.messages
//                     }

//                     const getNewMessageText = () => {
//                         return state.newMessageText
//                     }
//                     return (
//                         <Dialogs
//                             onAddMessage={addMessage}
//                             onMessageChange={updateNewMessageText}
//                             onGetDialogs={getDialogs}
//                             onGetMessages={getMessages}
//                             onGetNewMessageText={getNewMessageText} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

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
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer