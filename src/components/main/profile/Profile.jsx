import React from "react";
import Info from "./info/Info";
import PostsContainer from "./Posts/PostsContainer";
import Wallpaper from './wallpaper/Wallpaper';

import classes from './profile.module.css'

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <Wallpaper />
            <Info />
            <PostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;