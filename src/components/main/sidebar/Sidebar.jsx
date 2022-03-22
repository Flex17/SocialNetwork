import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Friends from './friends/Friends'
import classes from './sidebar.module.css';

const SideBar = (props) => {

    useEffect(() => {
        axios.get('http://localhost:8000/data')
            .then(response => {
                const data = response.data.sidebar
                props.onSetSidebar(data.bar, data.friends)
            })
            .catch(error => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sideBarElements =
        props.bar.map(elem => {
            return <NavLink to={elem.link} key={elem.id} className={(navData) => navData.isActive ? classes.active : classes.item}>{elem.value}</NavLink>
        })
    return (
        <div className={classes.sidebar}>
            <div className={classes.content}>
                {sideBarElements}
                <Friends friends={props.friends} />
            </div>
        </div >
    )
}

export default SideBar