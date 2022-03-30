import axios from 'axios'
import { NavLink } from 'react-router-dom'
import classes from './users.module.css'

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const follow = (id) => {
        const url = 'https://social-network.samuraijs.com/api/1.0/follow/' + id
        axios
            .post(url, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'b899cce5-feae-49bd-b15d-e3d3d7fb29a3'
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(id)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const unFollow = (id) => {
        const url = 'https://social-network.samuraijs.com/api/1.0/follow/' + id
        axios
            .delete(url, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'b899cce5-feae-49bd-b15d-e3d3d7fb29a3'
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unFollow(id)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const usersElements = props.users.map(user => {
        return (
            <div className={classes.userWrapper} key={user.id}>
                <div className={classes.user}>
                    <NavLink to={'/profile/' + user.id}>
                        <div className={classes.avatar}></div>
                    </NavLink>
                    {
                        user.followed ?
                            <button
                                className={classes.follow}
                                onClick={() => { unFollow(user.id) }}>
                                UNFOLLOW
                            </button>
                            :
                            <button
                                className={classes.follow}
                                onClick={() => { follow(user.id) }}>
                                FOLLOW
                            </button>
                    }
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
                onClick={() => { props.setCurrentPage(page) }}>
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