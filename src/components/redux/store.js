import profileReducer from "./profile-reducer"
import messageReducer from './message-reducer';
import sidebarReducer from './sidebar-reducer';

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, it`s my first post', likesCount: 0 },
                { id: 2, message: 'Hi, how are you?', likesCount: 0 }
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I`m fine' },
                { id: 4, message: 'I`m too' },
            ],
            dialogs: [
                { id: 1, name: 'Vlad' },
                { id: 2, name: 'Lera' },
                { id: 3, name: 'Egor' },
                { id: 4, name: 'Dima' },
                { id: 5, name: 'Maxim' },
                { id: 6, name: 'Sasha' },
            ],
            newMessageText: ''
        },
        sidebar: {
            bar: [
                { id: 1, value: 'Profile', link: '/profile' },
                { id: 2, value: 'Messages', link: '/dialogs' },
                { id: 3, value: 'News', link: '/news' },
                { id: 4, value: 'Music', link: '/music' },
                { id: 5, value: 'Settings', link: '/settings' }
            ],
            friends: [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Alex' }
            ]
        },
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callObserver = observer;
    },

    _callObserver() { },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callObserver(this._state);
    }
}




export default store