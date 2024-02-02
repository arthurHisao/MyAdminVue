import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { 
    MdLockoutline, 
    MdLockopenSharp, 
    MdLightmodeOutlined,
    MdDarkmodeOutlined,
    MdMenuRound,
    MdDashboard,
    MdProductionquantitylimitsRound,
    MdPeople
} from 'oh-vue-icons/icons'

addIcons(
    MdLockoutline,
    MdLockopenSharp,
    MdLightmodeOutlined,
    MdDarkmodeOutlined,
    MdMenuRound,
    MdDashboard,
    MdProductionquantitylimitsRound,
    MdPeople
)

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.$router = markRaw(router)
})

app.component("v-icon", OhVueIcon);
app.use(pinia)
app.use(router)

app.mount('#app')