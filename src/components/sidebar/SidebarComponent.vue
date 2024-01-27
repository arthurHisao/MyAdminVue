<script setup lang="ts">
import LogoComponent from '../logotype/LogoComponent.vue'
import IconComponent from '@/components/icon/IconComponent.vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { sidebarStateCollapsed } = storeToRefs(appStore)

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
  <aside
    :class="sidebarStateCollapsed ? 'lg:w-16' : 'lg:w-48'"
    class="shadow-md -ml-48 lg:ml-0 lg:-translate-x-0 h-screen fixed top-0 dark:text-white dark:bg-slate-800 dark:shadow-dark-mode-sm transition-margin-left-width duration-300 ease-in-out"
  >
    <div
      class="flex justify-start items-center border-b border-b-gray-500/5 dark:border-b-white/10 h-16"
    >
      <a href="" class="flex flex-row items-center whitespace-nowrap">
        <LogoComponent class="w-16 h-auto p-2" />
        <span
          :class="sidebarStateCollapsed ? 'invisible animate-fadeOut' : 'visible animate-fadeIn'"
          class="text-sm transition-fade-text"
        >
          My Admin
        </span>
      </a>
    </div>

    <nav>
      <ul class="mt-1 p-4">
        <li
          class="mb-4 py-1 border-b dark:border-b-white/10 hover:scale-105 dark:hover:opacity-80"
          v-for="sidebarLink in sidebarLinks"
          :key="sidebarLink.link"
        >
          <IconComponent class="ml-1" :iconName="sidebarLink.icon" scale="1" />
          <a
            :href="sidebarLink.link"
            class="py-2 ml-2 whitespace-nowrap"
            :class="sidebarStateCollapsed ? 'invisible animate-fadeOut' : 'visible animate-fadeIn'"
          >
            {{ sidebarLink.label }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>
