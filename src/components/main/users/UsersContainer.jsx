import { connect } from 'react-redux';
import { useEffect } from 'react';
import Users from './Users';
import Spinner from '../../common/Spinner/Spinner';

import { userAPI } from '../../../api/api';
import {
    follow,
    unFollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    changeLoadingStatus,
    changeFollowingProgress
} from '../../redux/users-reducer';

import classes from './users.module.css'


const UsersContainer = (props) => {

    useEffect(() => {
        userAPI.getUsers(props.currentPage, props.pageSize)
            .then(data => {
                props.changeLoadingStatus(true)
                props.setUsers(data.items)
                props.setTotalUsersCount(data.totalCount)
                props.changeLoadingStatus(false)
            })
            .catch(error => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setCurrentPage = (currentPage) => {
        props.setCurrentPage(currentPage)

        userAPI.getUsers(currentPage, props.pageSize)
            .then(data => {
                props.changeLoadingStatus(true)
                props.setUsers(data.items)
                props.changeLoadingStatus(false)
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
                    follow={props.follow}
                    unFollow={props.unFollow}
                    setCurrentPage={setCurrentPage}
                    changeFollowingProgress={props.changeFollowingProgress}
                    followingInProgress={props.followingInProgress}
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
        isLoading: usersPage.isLoading,
        followingInProgress: usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    changeLoadingStatus,
    changeFollowingProgress
})(UsersContainer)