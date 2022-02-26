const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, it`s my first post', likesCount: '20' },
                { id: 2, message: 'Hi, how are you?', likesCount: '15' }
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
        if (action.type === 'ADD-POST') {
            const state = this.dispatch({ type: 'GET-STATE' });
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
                    likesCount: 5
                }
                state.profilePage.posts.push(newPost);
                this._callObserver(state);
                store.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: '' })
            }
        }

        else if (action.type === 'ADD-MESSAGE') {
            const state = this.dispatch({ type: 'GET-STATE' });
            const text = state.messagesPage.newMessageText;
            const messagesArray = state.messagesPage.messages;

            if (text !== '') {
                const newMessage = {
                    id: messagesArray[messagesArray.length - 1].id + 1,
                    message: text
                }

                state.messagesPage.messages.push(newMessage)
                this._callObserver(state);
                this.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: '' })
            }
        }

        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            const state = this.dispatch({ type: 'GET-STATE' });
            const text = action.newText;

            state.profilePage.newPostText = text;
            this._callObserver(state)
        }

        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            const state = this.dispatch({ type: 'GET-STATE' });
            const text = action.newText;

            state.messagesPage.newMessageText = text;
            this._callObserver(state);
        }

        else if (action.type === 'DELETE-POST') {
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

        else if (action.type === 'GET-SIDEBAR') {
            return this._state._sidebar;
        }

        else if (action.type === 'GET-STATE') {
            return this._state;
        }

        else if (action.type === 'SUBSCRIBE') {
            this._callObserver = action.observer;
        }
    }
}




export default store