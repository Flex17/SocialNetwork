import React from "react";

import classes from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Lera' },
        { id: 3, name: 'Egor' },
        { id: 4, name: 'Dima' },
        { id: 5, name: 'Maxim' },
        { id: 6, name: 'Sasha' },
    ]

    const messagesData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I`m fine' },
        { id: 4, message: 'I`m too' },
    ]

    const dialogsElements =
        dialogsData.map(dialog => {
            return <DialogItem name={dialog.name} id={dialog.id} />
        })

    const messageElements =
        messagesData.map(message => {
            return <Message message={message.message} id={message.id} />
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