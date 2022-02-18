import React from "react";
import Address from "./address/Address";
import Friends from './friends/Friends'
import classes from './sidebar.module.css';

const SideBar = (props) => {
    const sideBarElements =
        props.state.bar.map(elem => {
            return <Address href={elem.link} value={elem.value} key={elem.id} />
        })
    return (
        <div className={classes.sidebar}>
            <div className={classes.content}>
                {sideBarElements}
                <Friends state={props.state} />
            </div>
        </div >
    )
}

export default SideBar