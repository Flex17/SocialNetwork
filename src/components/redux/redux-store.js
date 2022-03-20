import { combineReducers, createStore } from "redux";
import postsReducer from './posts-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    posts: postsReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

window.store = store

export default store
