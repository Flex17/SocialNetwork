const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'
const CHANGE_LIKES_COUNT = 'CHANGE-LIKES-COUNT'

const initialState = {
    posts: [
        { id: 1, message: 'Hello, it`s my first post', likesCount: 0 },
        { id: 2, message: 'Hi, how are you?', likesCount: 0 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = state.newPostText;
            const postsArray = state.posts;
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
                state.posts.push(newPost);
                profileReducer(state, { type: UPDATE_NEW_POST_TEXT, newText: '' })
            }
            return state

        case UPDATE_NEW_POST_TEXT:
            const postText = action.newText;

            state.newPostText = postText;
            return state

        case DELETE_POST:
            state.posts.forEach(element => {
                if (element.id === action.id) {
                    state.posts.splice(element.id - 1, 1)
                    let k = 1
                    state.posts.forEach(elem => { //* при удалении элемента каждому элементу массива задается новый id
                        elem.id = k
                        k++
                    })
                }
            });
            return state

        case CHANGE_LIKES_COUNT:
            const posts = state.posts

            posts.forEach(post => {
                if (post.id === action.id) {
                    post.likesCount += 1
                }
            });
            return state

        default:
            return state

    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export const deletePostActionCreator = (id) => {
    return {
        type: DELETE_POST,
        id: id
    }
}


export const changeLikesCountActionCreator = (id) => {
    return {
        type: CHANGE_LIKES_COUNT,
        id: id
    }
}

export default profileReducer;