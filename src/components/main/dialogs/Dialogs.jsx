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

    const newMessageInput = React.createRef();

    const addMessage = () => {
        const text = newMessageInput.current.value;
        props.addMessage(text)
        newMessageInput.current.value = ''
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
                    <input ref={newMessageInput} type="text" className={classes.input} placeholder='Type message' />
                    <button onClick={addMessage} className={classes.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs