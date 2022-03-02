const ADD_POST = 'ADD-POST'
const GET_STATE = 'GET-STATE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const DELETE_POST = 'DELETE-POST'
const GET_SIDEBAR = 'GET-SIDEBAR'
const SUBSCRIBE = 'SUBSCRIBE'
const CHANGE_LIKES_COUNT = 'CHANGE-LIKES-COUNT'

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const getStateActionCreator = () => {
    return {
        type: GET_STATE
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export const deletePosttActionCreator = (id) => {
    return {
        type: DELETE_POST,
        id: id
    }
}
export const getSidebarActionCreator = () => {
    return {
        type: GET_SIDEBAR
    }
}
export const subscribeActionCreator = (observer) => {
    return {
        type: SUBSCRIBE,
        observer: observer
    }
}
export const changeLikesCountActionCreator = (id) => {
    return {
        type: CHANGE_LIKES_COUNT,
        id: id
    }
}

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
        _sidebar: {
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

    _callObserver() { },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const state = this.dispatch({ type: GET_STATE });
            const text = state.profilePage.newPostText;
            const postsArray = state.profilePage.posts;
            let id = 0;

            if (postsArray.length !== 0) {
                id = postsArray[postsArray.length - 1].id + 1
            }

            if (text !== '') {
                const newPost = {
                    id: id,
                    message: text,
                    likesCount: 0
                }
                state.profilePage.posts.push(newPost);
                this._callObserver(state);
                store.dispatch({ type: UPDATE_NEW_POST_TEXT, newText: '' })
            }
        }

        else if (action.type === ADD_MESSAGE) {
            const state = this.dispatch({ type: GET_STATE });
            const text = state.messagesPage.newMessageText;
            const messagesArray = state.messagesPage.messages;

            if (text !== '') {
                const newMessage = {
                    id: messagesArray[messagesArray.length - 1].id + 1,
                    message: text
                }

                state.messagesPage.messages.push(newMessage)
                this._callObserver(state);
                this.dispatch({ type: UPDATE_NEW_MESSAGE_TEXT, newText: '' })
            }
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            const state = this.dispatch({ type: GET_STATE });
            const text = action.newText;

            state.profilePage.newPostText = text;
            this._callObserver(state)
        }

        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            const state = this.dispatch({ type: GET_STATE });
            const text = action.newText;

            state.messagesPage.newMessageText = text;
            this._callObserver(state);
        }

        else if (action.type === DELETE_POST) {
            store._state.profilePage.posts.forEach(element => {
                if (element.id === action.id) {
                    store._state.profilePage.posts.splice(element.id - 1, 1)
                    store._callObserver(store._state)
                    let k = 1
                    store._state.profilePage.posts.forEach(elem => { //* при удалении элемента каждому элементу массива задается новый id
                        elem.id = k
                        k++
                    })
                }
            });
        }

        else if (action.type === CHANGE_LIKES_COUNT) {
            const posts = store.dispatch({ type: GET_STATE }).profilePage.posts

            posts.forEach(post => {
                if (post.id === action.id) {
                    post.likesCount += 1
                }
            });
            this._callObserver()
        }

        else if (action.type === GET_SIDEBAR) {
            return this._state._sidebar;
        }

        else if (action.type === GET_STATE) {
            return this._state;
        }

        else if (action.type === SUBSCRIBE) {
            this._callObserver = action.observer;
        }
    }
}




export default store