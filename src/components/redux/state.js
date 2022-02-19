
import rerenderEntireTree from './../../render';
const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello, it`s my first post', likesCount: '20' },
            { id: 2, message: 'Hi, how are you?', likesCount: '15' }
        ]
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

export const addPost = (postText) => {
    const newPost = {
        id: 3,
        message: postText,
        likesCount: 5
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export const addMessage = (messageText) => {
    const newMessage = {
        id: 5,
        message: messageText
    }

    state.messagesPage.messages.push(newMessage)
    rerenderEntireTree(state)
}

export default state