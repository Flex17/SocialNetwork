import { combineReducers, createStore } from "redux";
import postsReducer from './posts-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import profileReducer from "./profile-reducer.ts";
import authReducer from "./auth-reducer.ts";

const reducers = combineReducers({
    profilePage: profileReducer,
    posts: postsReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers);

window.store = store

export default store
