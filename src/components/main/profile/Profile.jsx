import React from "react";
import Info from "./info/Info";
import Posts from "./Posts/Posts";
import Wallpaper from './wallpaper/Wallpaper';

import classes from './profile.module.css'

const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <Wallpaper />
            <Info />
            <Posts state={props.state} addPost={props.addPost} />
        </div>
    )
}

export default Profile;