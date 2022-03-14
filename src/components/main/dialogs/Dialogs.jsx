import React from "react";

import classes from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import axios from "axios";

const Dialogs = (props) => {

    if (props.dialogs.length === 0 && props.messages.length === 0) {
        axios.get('http://localhost:8000/data')
            .then(response => {
                const data = response.data.messagesPage

                props.onSetMessagesPage(data.messages, data.dialogs)
            })
    }

    const dialogsElements =
        props.dialogs.map(dialog => {
            return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
        })

    const messageElements =
        props.messages.map(message => {
            return <Message message={message.message} key={message.id} id={message.id} />
        })

    const onAddMessage = () => {
        props.onAddMessage()
    }

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.onMessageChange(text)
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
                        value={props.newMessageText}
                        className={classes.input}
                        placeholder='Type message' />
                    <button
                        onClick={onAddMessage}
                        className={classes.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs