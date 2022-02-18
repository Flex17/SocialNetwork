import React from "react";

import classes from './notFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={classes.notFound}>
            <div className={classes.content}>
                <div className={classes.error}>Sory, this page is not exist...</div>
            </div>
        </div>
    )
}

export default NotFoundPage