import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"
import Profile from "./Profile"

import { setUserProfile } from "../../redux/profile-reducer"
import { useParams } from "react-router-dom"


const ProfileContainer = (props) => {
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
                .then(response => {
                    props.setUserProfile(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Profile {...props} />
        </div>
    )
}

const mapStateToProps = (state) => {
    const profile = state.profilePage
    return {
        name: profile.name,
        about: profile.about,
        isLookingForAJob: profile.isLookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        contacts: profile.contacts,
        currentId: profile.currentId
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)