import React from "react";
import { Link, NavLink } from 'react-router-dom'

import classes from './header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <Link to='/profile' className={classes.link}>
                    <div className={classes.logo}></div>
                </Link>
                {
                    props.isAuth ?
                        <NavLink to={'/profile/' + props.id} className={classes.login}>{props.login}</NavLink>
                        :
                        <NavLink to={'/login'} className={classes.signIn}>Sign in</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;