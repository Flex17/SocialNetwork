
import rerenderEntireTree from './../../render';
const state = {
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
    }
}

export const addPost = () => {
    const text = state.profilePage.newPostText;
    const postsArray = state.profilePage.posts;
    if (text !== '') {
        const newPost = {
            id: postsArray[postsArray.length - 1].id + 1,
            message: text,
            likesCount: 5
        }
        state.profilePage.posts.push(newPost);
        rerenderEntireTree(state);
        updateNewPostText('')
    }
}

export const updateNewPostText = (newText) => {
    const text = newText;

    state.profilePage.newPostText = text;
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const text = state.messagesPage.newMessageText;
    const messagesArray = state.messagesPage.messages;
    if (text !== '') {
        const newMessage = {
            id: messagesArray[messagesArray.length - 1].id + 1,
            message: text
        }

        state.messagesPage.messages.push(newMessage)
        rerenderEntireTree(state);
        updateNewMessageText('')
    }
}

export const updateNewMessageText = (newText) => {
    const text = newText;

    state.messagesPage.newMessageText = text;
    rerenderEntireTree(state);
}

export default state