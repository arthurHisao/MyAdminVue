import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        isDarkState: false,
        sidebarStateCollapsed: false,
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
            if (localStorage.theme == 'auto' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.setDarkMode
                localStorage.theme  = 'auto'
            } 
        },
        toggleTheme() {
            this.setDarkMode
        },

        setSidebarCollapsed() {
            this.sidebarStateCollapsed = !this.sidebarStateCollapsed
        }
    }
})