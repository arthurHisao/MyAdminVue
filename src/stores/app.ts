import { defineStore } from 'pinia'
import api from '@/utils/axios'

interface IRouter {
    push: (to: string) => void
}

export const useAppStore = defineStore('app', {
    state: () => ({
        isDarkState: false,
        isLoggedIn: false,
        isSidebarCollapsed: false,
        isOffCanvasOpen: false,
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

        }
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

        async login(formInputs: { email: string, password: string}) {
            const { email, password} = formInputs
            
            api
            .post('/login',{ email, password})
            .then((response) => {
                // custom toast show here...
                this.isLoggedIn = true
                this.$router.push("/admin")
            })
            .catch((error) => {
                // custom toast show here...
                console.log(error)
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