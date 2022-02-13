import React from "react";
import Info from "./info/Info";
import Posts from "./Posts/Posts";
import Wallpaper from './wallpaper/Wallpaper';

import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Wallpaper />
            <Info />
            <Posts />
        </div>
    )
}

export default Profile;