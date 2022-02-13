import React from "react";
import Detail from "./Detail/Detail";

import classes from './info.module.css'

const Info = () => {
    return (
        <div className={classes.info}>
            <div className={classes.avatar}></div>
            <div>
                <Detail k="Name" value="Vlad" />
                <Detail k="Birthday" value="12.08.2004" />
                <Detail k="City" value="Kurgan" />
                <Detail k="Education" value="Gymnasium 27" />
                <Detail k="Web-site" value="Platov-web.surge.sh" />
            </div>
        </div>
    )
}

export default Info