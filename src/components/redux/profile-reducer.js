const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'
const CHANGE_LIKES_COUNT = 'CHANGE-LIKES-COUNT'
const SET_POSTS = 'SET-POSTS'

const initialState = {
    posts: [],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_POST: {
            const text = state.newPostText.trim(); //* срезает все лишние пробелы
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

                stateCopy = {
                    ...state,
                    posts: [...state.posts, newPost]
                }
            } else {
                stateCopy = {
                    ...state,
                    newPostText: ''
                }
            }
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            const postText = action.newText;

            stateCopy = {
                ...state,
                newPostText: postText
            }

            return stateCopy
        }
        case DELETE_POST: {
            stateCopy = {
                ...state,
                posts: [...state.posts]
            }

            const posts = stateCopy.posts

            posts.forEach(element => {
                if (element.id === action.id) {
                    posts.splice(element.id - 1, 1)
                    let k = 1
                    posts.forEach(elem => { //* при удалении элемента каждому элементу массива задается новый id
                        elem.id = k
                        k++
                    })
                }
            });
            return stateCopy
        }

        case CHANGE_LIKES_COUNT: {
            stateCopy = {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.id) {
                        return { ...post, likesCount: post.likesCount + 1 }
                    }
                    return post
                })
            }

            return stateCopy
        }

        case SET_POSTS: {
            return stateCopy = {
                ...state,
                posts: [...action.posts]
            }
        }

        default: {
            return state
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

export const setPostsActionCreator = (posts) => {
    return {
        type: SET_POSTS,
        posts: [...posts]
    }
}

export default profileReducer;