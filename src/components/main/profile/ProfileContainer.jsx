import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { setUserProfile } from "../../redux/profile-reducer.ts"
import { userAPI } from "../../../api/api"
import Profile from "./Profile"


const ProfileContainer = (props) => {
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            userAPI.getUserProfile(id)
                .then(data => {
                    props.setUserProfile(data)
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