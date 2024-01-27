<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { sidebarStateCollapsed } = storeToRefs(appStore)
</script>

<template>
  <div
    :class="sidebarStateCollapsed ? 'lg:ml-16' : 'lg:ml-48'"
    class="ml-0 bg-white dark:bg-slate-800 border border-r-0 border-b-0 border-l-0 border-t-gray-300 dark:border-t-slate-600 border-solid h-full p-3 text-center transition-margin-left duration-300 ease-in-out"
  >
    <p class="text-xs">@2024 - All Rights Reserved By A.H</p>
  </div>
</template>
