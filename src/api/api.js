import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b899cce5-feae-49bd-b15d-e3d3d7fb29a3'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        const url = `users?page=${currentPage}&count=${pageSize}`

        return instance
            .get(url)
            .then(response => {
                return response.data
            })
    },

    follow(id) {
        const url = 'follow/' + id

        return instance
            .post(url)
            .then(response => {
                return response.data
            })
    },

    unFollow(id) {
        const url = 'follow/' + id

        return instance
            .delete(url)
            .then(response => {
                return response.data
            })
    },

    getSidebarData() {
        const url = 'http://localhost:8000/data'

        return axios
            .get(url)
            .then(response => {
                return response.data
            })
    },

    authMe() {
        const url = 'auth/me'

        return instance
            .get(url)
            .then(response => {
                return response.data
            })
    },

    getPosts() {
        const url = 'http://localhost:8000/data'

        return axios
            .get(url)
            .then(response => {
                return response.data
            })
    },

    getDialogs() {
        const url = 'http://localhost:8000/data'

        return axios
            .get(url)
            .then(response => {
                return response.data
            })
    },

    getUserProfile(id) {
        const url = 'profile/' + id

        return instance
            .get(url)
            .then(response => {
                return response.data
            })
    }
}