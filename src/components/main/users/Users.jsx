import axios from 'axios'
import { useEffect } from 'react';
import classes from './users.module.css'

const Users = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}
        &count=${props.pageSize}`)
            .then(response => {
                props.onSetUsers(response.data.items)
                props.onSetTotalUsersCount(response.data.totalCount)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onFollow = (id) => {
        props.onFollow(id)
    }

    const onSetCurrentPage = (currentPage) => {
        props.onSetCurrentPage(currentPage)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
        &count=${props.pageSize}`)
            .then(response => {
                props.onSetUsers(response.data.items)
            })
    }

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const usersElements = props.users.map(user => {
        return (
            <div className={classes.userWrapper} key={user.id}>
                <div className={classes.user}>
                    <div className={classes.avatar}></div>
                    <button
                        className={classes.follow}
                        onClick={() => { onFollow(user.id) }}>
                        {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                    </button>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.mainInfo}>
                        <div className={classes.name}>
                            {`${user.name}`}
                        </div>
                        <div className={classes.status}>
                            <span>Status: </span>
                            {user.status}
                        </div>
                    </div>
                    <div className={classes.location}>
                        {`Any country,`}
                        <br />
                        {`Any city`}
                    </div>
                </div>
            </div>
        )
    })

    const pagesElements = pages.map(page => {
        return (
            <span
                key={page}
                className={`${classes.page} ${props.currentPage === page ? classes.selectedPage : ''}`}
                onClick={() => { onSetCurrentPage(page) }}>
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
                {usersElements}
            </div>
        </div>
    )
}

export default Users