
import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, setUsersActionCreator } from '../../redux/users-reducer';
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (id) => {
            const followAction = followActionCreator(id)
            dispatch(followAction)
        },

        onSetUsers: (users) => {
            const setUsersAction = setUsersActionCreator(users)

            dispatch(setUsersAction)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer