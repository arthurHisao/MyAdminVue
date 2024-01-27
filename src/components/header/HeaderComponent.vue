<script setup lang="ts">
import IconComponent from '@/components/icon/IconComponent.vue'
import ToggleSwitchButton from '@/components/buttons/ChangeThemeComponent.vue'
import { RouterLink } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const appStore = useAppStore()
const { sidebarStateCollapsed } = storeToRefs(appStore)

const isDropdownShowing = ref(false)

const handleShowDropdown = () => {
  isDropdownShowing.value = !isDropdownShowing.value
}

const handleCollapseSidebar = () => {
  appStore.setSidebarCollapsed()
}
</script>

<template>
  <header
    :class="sidebarStateCollapsed ? 'lg:ml-16' : 'lg:ml-48'"
    class="shadow-sm dark:shadow-dark-mode-sm z-10 max-h-20 h-16 bg-white dark:bg-slate-800 dark:text-white sticky top-0 transition-margin-left duration-300 ease-in-out"
  >
    <div class="container mx-auto px-4 flex flex-row justify-between items-center h-full">
      <div class="p-1" @click="handleCollapseSidebar">
        <IconComponent class="dark:text-white cursor-pointer" iconName="MdMenuRound" scale="1" />
      </div>
      <nav>
        <ul class="flex flex-row gap-5 items-center">
          <li>
            <ToggleSwitchButton />
          </li>
          <li>
            <div class="flex items-center justify-center gap-2 relative">
              <!-- ======= User NAME ======= -->
              <span>USER NAME</span>
              <div
                class="rounded-full cursor-pointer select-none bg-gray-400 w-10 h-10 flex items-center justify-center"
                @click="handleShowDropdown"
              >
                <span>UN</span>
              </div>
              <!-- ======= Drop Down ======= -->
              <ul
                :class="isDropdownShowing ? 'block' : 'hidden'"
                class="absolute top-[52px] right-0 z-10 shadow-md dark:shadow-md dark:shadow-slate-700-/15 bg-white dark:bg-slate-600 min-w-48 transition-all duration-500"
              >
                <li class="py-2 px-4 hover:bg-gray-200 dark:hover:bg-slate-500">
                  <router-link to="settings">Account Settings</router-link>
                </li>
                <li class="py-2 px-4 hover:bg-gray-200 dark:hover:bg-slate-500">
                  <router-link to="login">Logout</router-link>
                </li>
              </ul>
              <div
                :class="isDropdownShowing ? 'visible' : 'invisible'"
                class="h-screen w-screen fixed top-0 left-0"
                @click="handleShowDropdown"
              ></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
