import React from "react";

import classes from './dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name='Vlad' id='1' />
                <DialogItem name='Lera' id='2' />
                <DialogItem name='Egor' id='3' />
                <DialogItem name='Dima' id='4' />
                <DialogItem name='Maxim' id='5' />
                <DialogItem name='Sasha' id='6' />
            </div>
            <div className={classes.messages}>
                <Message message="Hello" />
                <Message message="How are you?" />
                <Message message="I`m fine" />
                <Message message="I`m too" />
            </div>
        </div>
    )
}

export default Dialogs