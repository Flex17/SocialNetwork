
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from './../redux/auth-reducer';

const HeaderContainer = (props) => {

    useEffect(() => {
        const url = 'https://social-network.samuraijs.com/api/1.0/auth/me'
        axios.get(url, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const { id, login, email } = response.data.data
                    const isAuth = true
                    props.setAuthUserData(id, login, email, isAuth)
                }
            })
    })

    return (
        <Header {...props} />
    )

}

const mapStateToProps = (state) => {
    const auth = state.auth
    return {
        isAuth: auth.isAuth,
        login: auth.login,
        id: auth.id
    }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)