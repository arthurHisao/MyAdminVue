import './assets/main.css'

import { createApp } from 'vue'
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
app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
