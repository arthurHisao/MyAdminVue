import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Toast, { type PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { 
    MdLockoutline, 
    MdLockopenSharp, 
    MdLightmodeOutlined,
    MdDarkmodeOutlined,
    MdMenuRound,
    MdDashboard,
    MdProductionquantitylimitsRound,
    MdPeople,
    MdInfoRound
} from 'oh-vue-icons/icons'

addIcons(
    MdLockoutline,
    MdLockopenSharp,
    MdLightmodeOutlined,
    MdDarkmodeOutlined,
    MdMenuRound,
    MdDashboard,
    MdProductionquantitylimitsRound,
    MdPeople,
    MdInfoRound
)

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.$router = markRaw(router)
})

/**
 * @see
 * https://vue-toastification.maronato.dev/
 */
const options: PluginOptions = {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true,
}

app.use(Toast, options)
app.component("v-icon", OhVueIcon)
app.use(pinia)
app.use(router)

app.mount('#app')