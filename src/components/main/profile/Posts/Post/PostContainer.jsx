import { changeLikesCountActionCreator, deletePostActionCreator } from './../../../../redux/profile-reducer';
import Post from "./Post";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLikesCount: (id) => {
            dispatch(changeLikesCountActionCreator(id))
        },
        onDeletePost: (id) => {
            dispatch(deletePostActionCreator(id))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer