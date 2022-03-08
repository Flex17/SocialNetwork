import React from "react";
import Address from "./address/Address";
import Friends from './friends/Friends'
import classes from './sidebar.module.css';

const SideBar = (props) => {
    const sideBarElements =
        props.bar.map(elem => {
            return <Address href={elem.link} value={elem.value} key={elem.id} />
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