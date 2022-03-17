import { connect } from 'react-redux';
import Users from './Users';

import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setTotalUsersCountActionCreator
} from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    const usersPage = state.usersPage

    return {
        users: usersPage.users,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage
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
        },

        onSetCurrentPage: (currentPage) => {
            const setCurrentPageAction = setCurrentPageActionCreator(currentPage)

            dispatch(setCurrentPageAction)
        },

        onSetTotalUsersCount: (count) => {
            const setTotalUsersCountAction = setTotalUsersCountActionCreator(count)

            dispatch(setTotalUsersCountAction)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer