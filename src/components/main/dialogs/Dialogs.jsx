import React from "react";

import classes from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/message-reducer";

const Dialogs = (props) => {
    const state = props.store.getState().messagesPage

    const dialogsElements =
        state.dialogs.map(dialog => {
            return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
        })

    const messageElements =
        state.messages.map(message => {
            return <Message message={message.message} key={message.id} id={message.id} />
        })

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.content}>
                    {messageElements}
                </div>
                <div className={classes.add}>
                    <input
                        onChange={onMessageChange}
                        value={state.newMessageText}
                        className={classes.input}
                        placeholder='Type message' />
                    <button
                        onClick={addMessage}
                        className={classes.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs