import React from "react";
import Detail from "./Detail/Detail";

import classes from './info.module.css'

// const Info = () => {
//     return (
//         <div className={classes.info}>
//             <div className={classes.avatar}></div>
//             <div>
//                 <Detail k="Name" value="Vlad" />
//                 <Detail k="Birthday" value="12.08.2004" />
//                 <Detail k="City" value="Kurgan" />
//                 <Detail k="Education" value="Gymnasium 27" />
//                 <Detail k="Web-site" value="Platov-web.surge.sh" />
//             </div>
//         </div>
//     )
// }


const Info = (props) => {
    const name = props.name
    const about = props.about
    const isLookingForAJob = props.isLookingForAJob
    const lookingForAJobDescription = props.lookingForAJobDescription
    const contact = props.contacts
    const notSpecifed = 'not specifed'

    return (
        <div className={classes.info}>
            <div className={classes.avatar}></div>
            <div>
                <Detail
                    k="Name"
                    value={name ? name : notSpecifed}
                />
                <Detail
                    k="About"
                    value={about ? about : notSpecifed}
                />
                <Detail
                    k="Looking for a job"
                    value={isLookingForAJob ? 'yes' : 'no'}
                />
                <Detail
                    k="Looking for a job description"
                    value={lookingForAJobDescription ? lookingForAJobDescription : notSpecifed}
                />
                <Detail
                    k="Contacts"
                    value={contact ? contact : notSpecifed}
                />
            </div>
        </div>
    )
}

export default Info