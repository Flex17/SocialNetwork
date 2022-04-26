import { useEffect } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from './../redux/auth-reducer.ts';
import { userAPI } from './../../api/api';

const HeaderContainer = (props) => {

    useEffect(() => {
        userAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, login, email } = data.data
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