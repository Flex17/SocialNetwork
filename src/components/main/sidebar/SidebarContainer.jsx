import React from "react";

import SideBar from './Sidebar';

const SideBarContainer = (props) => {
    const state = props.store.getState().sidebar

    const getBar = () => {
        return state.bar
    }

    const getFriends = () => {
        return state.friends
    }
    return (
        <SideBar onGetBar={getBar} onGetFriends={getFriends} />
    )
}

export default SideBarContainer