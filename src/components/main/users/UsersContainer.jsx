import { connect } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios'
import Users from './Users';
import Spinner from '../../common/Spinner/Spinner';

import {
    follow,
    unFollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    changeLoadingStatus
} from '../../redux/users-reducer';

import classes from './users.module.css'


const UsersContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}
        &count=${props.pageSize}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'b899cce5-feae-49bd-b15d-e3d3d7fb29a3'
            }
        })
            .then(response => {
                props.changeLoadingStatus(true)
                props.setUsers(response.data.items)
                props.setTotalUsersCount(response.data.totalCount)
                props.changeLoadingStatus(false)
            })
            .catch(error => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setCurrentPage = (currentPage) => {
        props.setCurrentPage(currentPage)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
        &count=${props.pageSize}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'b899cce5-feae-49bd-b15d-e3d3d7fb29a3'
            }
        })
            .then(response => {
                props.changeLoadingStatus(true)
                props.setUsers(response.data.items)
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

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    changeLoadingStatus
})(UsersContainer)