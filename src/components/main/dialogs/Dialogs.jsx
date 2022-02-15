import React from "react";

import classes from './dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <NavLink to='/dialogs/Vlad' className={classes.dialog + ' ' + classes.active}>Vlad</NavLink>
                <NavLink to='/dialogs/Sasha' className={classes.dialog}>Sasha</NavLink>
                <NavLink to='/dialogs/Egor' className={classes.dialog}>Egor</NavLink>
                <NavLink to='/dialogs/Dima' className={classes.dialog}>Dima</NavLink>
                <NavLink to='/dialogs/Lera' className={classes.dialog}>Lera</NavLink>
                <NavLink to='/dialogs/Maxim' className={classes.dialog}>Maxim</NavLink>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are u?</div>
                <div className={classes.message}>I`m fine</div>
                <div className={classes.message}>I`m too</div>
            </div>
        </div>
    )
}

export default Dialogs