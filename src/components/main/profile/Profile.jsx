import React from "react";
import Info from "./info/Info";
import Posts from "./Posts/Posts";
import Wallpaper from './wallpaper/Wallpaper';

import classes from './profile.module.css'

const Profile = (props) => {
    // debugger
    return (
        <div className={classes.profile}>
            <Wallpaper />
            <Info />
            <Posts
                store={props.store}
                dispatch={props.store.dispatch.bind(props.store)}
            />
        </div>
    )
}

export default Profile;