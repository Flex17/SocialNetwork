import { Oval } from "react-loader-spinner"

import classes from './spinner.module.css'

const Spinner = () => {
    return (
        <div className={classes.wrapper}>
            <Oval
                color="black"
                secondaryColor="grey"
                height={150}
                width={150}
            />
        </div>
    )
}

export default Spinner