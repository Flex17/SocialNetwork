import React from "react";

import classes from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    const dialogsElements =
        props.state.dialogs.map(dialog => {
            return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
        })

    const messageElements =
        props.state.messages.map(message => {
            return <Message message={message.message} key={message.id} id={message.id} />
        })


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs