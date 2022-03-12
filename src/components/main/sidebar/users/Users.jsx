import classes from './users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.onSetUsers([
            { id: 1, name: 'Vlad', surname: 'Platov', status: 'I`m fine', country: 'Russia', city: 'Kurgan', followed: false },
            { id: 2, name: 'Alex', surname: 'Ivanov', status: 'I`m fine', country: 'Ukraine', city: 'Kiev', followed: false },
            { id: 3, name: 'Egor', surname: 'Petrov', status: 'I`m fine', country: 'Belarus', city: 'Minsk', followed: false },
            { id: 4, name: 'Andrey', surname: 'Sidorov', status: 'I`m fine', country: 'Russia', city: 'Kurgan', followed: false }
        ])
    }

    const onFollow = (id) => {
        props.onFollow(id)
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
    return (
        <div>
            <div className={classes.title}>Users</div>
            <div className={classes.users}>
                {usersElements}
            </div>
        </div>
    )
}

export default Users