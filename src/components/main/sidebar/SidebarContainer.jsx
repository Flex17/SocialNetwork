import SideBar from './Sidebar';
import { connect } from 'react-redux';

// const SideBarContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().sidebar

//                     const getBar = () => {
//                         return state.bar
//                     }

//                     const getFriends = () => {
//                         return state.friends
//                     }
//                     return (
//                         <SideBar onGetBar={getBar} onGetFriends={getFriends} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    const sidebar = state.sidebar
    return {
        bar: sidebar.bar,
        friends: sidebar.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default SideBarContainer