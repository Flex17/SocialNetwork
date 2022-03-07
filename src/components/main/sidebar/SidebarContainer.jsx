import React from "react";
import StoreContext from "../../../store-context";

import SideBar from './Sidebar';

const SideBarContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().sidebar

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
            }
        </StoreContext.Consumer>
    )
}

export default SideBarContainer