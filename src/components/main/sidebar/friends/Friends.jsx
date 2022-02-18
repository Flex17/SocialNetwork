import React from "react";
import Friend from "./friend/Friend";

import classes from './friends.module.css'

const Friends = (props) => {
    const friendsList =
        props.state.map(friend => {
            return <Friend name={friend.name} key={friend.id} />
        })
    return (
        <div className={classes.friends}>
            <div className={classes.title}>Friends</div>
            <div className={classes.content}>
                {friendsList}
            </div>
        </div>
    )
}

export default Friends