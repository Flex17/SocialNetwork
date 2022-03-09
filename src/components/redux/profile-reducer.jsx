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
        case ADD_POST: {
            const stateCopy = { ...state }
            const text = stateCopy.newPostText;
            stateCopy.posts = [...state.posts]
            const postsArray = stateCopy.posts;
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
                stateCopy.posts.push(newPost);
            }
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            const postText = action.newText;
            const stateCopy = { ...state };

            stateCopy.newPostText = postText;
            return stateCopy
        }
        case DELETE_POST: {
            const stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.forEach(element => {
                if (element.id === action.id) {
                    stateCopy.posts.splice(element.id - 1, 1)
                    let k = 1
                    stateCopy.posts.forEach(elem => { //* при удалении элемента каждому элементу массива задается новый id
                        elem.id = k
                        k++
                    })
                }
            });
            return stateCopy
        }

        case CHANGE_LIKES_COUNT: {
            const stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            const posts = stateCopy.posts

            posts.forEach(post => {
                if (post.id === action.id) {
                    post.likesCount += 1
                }
            });
            return stateCopy
        }

        default: {
            const stateCopy = { ...state }
            return stateCopy
        }

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