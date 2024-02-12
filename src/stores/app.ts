import { defineStore } from 'pinia'
import api from '@/utils/axios'
import Cookies from 'js-cookie'
import { useToast } from 'vue-toastification'

interface IRouter {
    push: (to: string) => void
}

const toast = useToast()

export const useAppStore = defineStore('app', {
    state: () => ({
        isDarkState: false,
        isLoggedIn: false,
        isSidebarCollapsed: false,
        isOffCanvasOpen: false,
        isToastShowing: false,
        isLoading: false,
        loggedUserInfo: {
            id: 0,
            name: '',
            // avatar: '',
            email: '',
            createdAt: '',
        },
        $router: {} as IRouter
    }),
    getters: {
        // change state to: Darkmode || Lightmode
        setDarkMode: (state) => {
            if (state.isDarkState) {
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'
                return state.isDarkState = false
            } else {
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
                return state.isDarkState = true
            }
        },
        setUserAvatar: (state) => state.loggedUserInfo.name.split(' ').map(str => str.charAt(0)).join('').substring(0, 2)
    },
    actions: {
        detectMode() {
            // If user manually select dark theme
            if (localStorage.theme == 'dark') { 
                this.setDarkMode
            } 

            // Automatically detects OS dark theme
            if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.setDarkMode
            } 
        },

        isAuth() {
            const token =  Cookies.get('XSRF-TOKEN')

            if (token) {
                return this.isLoggedIn = true
            }
            return this.isLoggedIn = false
        },

        getToken() {
            api.get('/csrf-cookie')
        },

        login(formInputs: { email: string, password: string}) {
            const { email, password} = formInputs

            this.isLoading = true           
            api
             .post('/login',{ email, password})
             .then(() => {
                this.$router.push("/admin")
                this.isLoading = false
             })
             .catch((error) => {
                toast.error(error.response.data.message)
                this.isLoading = false
             })
        },

        async logout() {
            await api.get('/logout')
            window.location.href = '/login'          
        }, 

        getAuthenticatedUser() {
            api
             .get('/user')
             .then((response) => {
                this.loggedUserInfo = response.data
             })
             .catch((error) => {
                toast.error(error.response.data.message)
             })
        },

        toggleTheme() {
            this.setDarkMode
        },

        toggleSidebar() {
            if (window.screen.width >= 1024) {
                this.isOffCanvasOpen = false
                this.isSidebarCollapsed = !this.isSidebarCollapsed
            } else {
                this.isSidebarCollapsed = false
                this.isOffCanvasOpen = !this.isOffCanvasOpen
            }
        }
    }
})