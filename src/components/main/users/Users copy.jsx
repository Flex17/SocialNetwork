import React from 'react';
import axios from 'axios'
import classes from './users.module.css'

class Userss extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
                this.props.onSetTotalUsersCount(response.data.totalCount)
            })
    }

    onFollow = (id) => {
        this.props.onFollow(id)
    }

    onSetCurrentPage = (currentPage) => {
        this.props.onSetCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
            })
    }


    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        const pagesElements = pages.map(page => {
            return (
                <span
                    key={page}
                    className={`${classes.page} ${this.props.currentPage === page ? classes.selectedPage : ''}`}
                    onClick={() => { this.onSetCurrentPage(page) }}>
                    {page}
                </span>
            )
        })



        return (
            <div>
                <div className={classes.title}>Users</div>
                <div className={classes.pages}>
                    {pagesElements}
                </div>
                <div className={classes.users}>
                    {
                        this.props.users.map(user => {
                            return (
                                <div className={classes.userWrapper} key={user.id}>
                                    <div className={classes.user}>
                                        <div className={classes.avatar}></div>
                                        <button
                                            className={classes.follow}
                                            id={user.id}
                                            onClick={() => { this.onFollow(user.id) }}>
                                            {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                                        </button>
                                    </div>
                                    <div className={classes.userInfo}>
                                        <div className={classes.mainInfo}>
                                            <div className={classes.name}>
                                                {`${user.name} ${user.surname}`}
                                            </div>
                                            <div className={classes.status}>
                                                <span>Status: </span>
                                                {user.status}
                                            </div>
                                        </div>
                                        <div className={classes.location}>
                                            {`${user.country},`}
                                            <br />
                                            {`${user.city}`}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Userss