import { connect } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios'
import Users from './Users';
import Spinner from '../../common/Spinner/Spinner';

import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setTotalUsersCountActionCreator,
    changeLoadingStatusActionCreator
} from '../../redux/users-reducer';

import classes from './users.module.css'


const UsersContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}
        &count=${props.pageSize}`)
            .then(response => {
                props.onChangeLoadingStatus(true)
                props.onSetUsers(response.data.items)
                props.onSetTotalUsersCount(response.data.totalCount)
                props.onChangeLoadingStatus(false)
            })
            .catch(error => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSetCurrentPage = (currentPage) => {
        props.onSetCurrentPage(currentPage)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
        &count=${props.pageSize}`)
            .then(response => {
                props.onChangeLoadingStatus(true)
                props.onSetUsers(response.data.items)
                props.onChangeLoadingStatus(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={classes.wrapper}>
            {props.isLoading ?
                <Spinner />
                :
                <Users
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    users={props.users}
                    currentPage={props.currentPage}
                    onFollow={props.onFollow}
                    onSetCurrentPage={onSetCurrentPage}
                />
            }

        </div>
    )
}


const mapStateToProps = (state) => {
    const usersPage = state.usersPage

    return {
        users: usersPage.users,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage,
        isLoading: usersPage.isLoading
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
        },

        onChangeLoadingStatus: (isLoading) => {
            const changeLoadingAction = changeLoadingStatusActionCreator(isLoading)

            dispatch(changeLoadingAction)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)