import SideBar from './Sidebar';
import { connect } from 'react-redux';
import { setSidebar } from './../../redux/sidebar-reducer';

const mapStateToProps = (state) => {
    const sidebar = state.sidebar
    return {
        bar: sidebar.bar,
        friends: sidebar.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSidebar: (bar, friends) => {
            const setSidebarAction = setSidebar(bar, friends)

            dispatch(setSidebarAction)
        }
    }
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default SideBarContainer