<script setup lang="ts">
import LogoComponent from '../logotype/LogoComponent.vue'
import IconComponent from '@/components/icon/IconComponent.vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const appStore = useAppStore()
const { isSidebarCollapsed, isOffCanvasOpen } = storeToRefs(appStore)
const { toggleSidebar } = appStore

const styleOffCanvas = ref({})

const handleCloseOffCanvas = () => {
  toggleSidebar()
}

watch(isOffCanvasOpen, (newOffCanvasState) => {
  window.addEventListener('resize', () => {
    if (window.screen.width >= 1024) {
      styleOffCanvas.value = {}
      isOffCanvasOpen.value = false
    }
  })

  if (newOffCanvasState && window.screen.width <= 1023) {
    styleOffCanvas.value = {
      transform: 'translateX(192px)',
      width: '192px',
      zIndex: '25',
      transition: 'transform .2s linear'
    }
  } else {
    styleOffCanvas.value = {
      transform: 'translateX(0)',
      zIndex: '25',
      transition: 'transform .3s linear, margin-left .3s ease-in-out, width .3s ease-in-out'
    }
  }
})

const sidebarLinks = [
  {
    link: '/',
    label: 'Dashboard',
    icon: 'MdDashboard',
    title: 'link title'
  },
  {
    link: '/products',
    label: 'Produtos',
    icon: 'MdProductionquantitylimitsRound',
    title: 'link title'
  },
  {
    link: '/users',
    label: 'Usuários',
    icon: 'MdPeople',
    title: 'link title'
  }
]
</script>

<template>
  <!-- Invisible div used by offCanvas -->
  <div
    v-if="isOffCanvasOpen"
    class="h-screen w-screen fixed top-0 left-0 bg-gray-900/30 z-20"
    @click="handleCloseOffCanvas"
  />
  <!-- Sidebar -->
  <aside
    :style="styleOffCanvas"
    :class="isSidebarCollapsed ? 'lg:w-16' : 'lg:w-48'"
    class="shadow-md -ml-48 translate-x-0 lg:ml-0 h-screen fixed top-0 dark:text-white dark:bg-slate-800 dark:shadow-dark-mode-sm transition-margin-left-width duration-300 ease-in-out"
  >
    <div
      class="flex justify-start items-center border-b border-b-gray-500/5 dark:border-b-white/10 h-16"
    >
      <a href="" class="flex flex-row items-center whitespace-nowrap">
        <LogoComponent class="w-16 h-auto p-2" />
        <span
          :class="isSidebarCollapsed ? 'invisible animate-fadeOut' : 'visible animate-fadeIn'"
          class="text-sm transition-fade-text"
        >
          My Admin
        </span>
      </a>
    </div>

    <nav>
      <ul class="mt-1 p-4">
        <li
          class="flex items-center mb-4 py-1 border-b dark:border-b-white/10 hover:scale-105 dark:hover:opacity-80"
          v-for="sidebarLink in sidebarLinks"
          :key="sidebarLink.link"
        >
          <IconComponent class="ml-1" :iconName="sidebarLink.icon" scale="1" />
          <a
            :href="sidebarLink.link"
            class="py-2 ml-2 whitespace-nowrap"
            :class="isSidebarCollapsed ? 'invisible animate-fadeOut' : 'visible animate-fadeIn'"
          >
            {{ sidebarLink.label }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>
