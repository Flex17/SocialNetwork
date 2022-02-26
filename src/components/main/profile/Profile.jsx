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
            <Posts
                state={props.store.dispatch({ type: 'GET-STATE' })}
                store={props.store}
                dispatch={props.store.dispatch.bind(props.store)}
            // addPost={props.store.addPost.bind(props.store)}
            // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
            />
        </div>
    )
}

export default Profile;