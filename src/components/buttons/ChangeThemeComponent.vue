<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import IconComponent from '@/components/icon/IconComponent.vue'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { isDarkState } = storeToRefs(appStore)
const { toggleTheme } = appStore

const handleToggleDark = () => {
  toggleTheme()
}
</script>

<template>
  <label
    for="change-mode"
    class="block rounded-full w-12 h-7 relative cursor-pointer border border-gray-300 dark:border-white/15 bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-white"
  >
    <span
      :class="
        isDarkState ? 'translate-x-[21px] bg-slate-900 text-white' : 'translate-x-px bg-white'
      "
      class="block relative w-6 h-6 top-[1px] bottom-0 left-0 right-0 rounded-full ease duration-300 cursor-pointer"
    >
      <IconComponent
        class="absolute top-0 left-0 right-0 p-1 w-6 h-6 rounded-full"
        :iconName="isDarkState ? 'MdDarkmodeOutlined' : 'MdLightmodeOutlined'"
        scale="1"
      />
    </span>
    <input
      type="checkbox"
      id="change-mode"
      class="opacity-0 w-0 h-0"
      :checked="isDarkState"
      @change="handleToggleDark"
    />
  </label>
</template>
