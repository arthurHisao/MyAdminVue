<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  className: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    required: false
  },
  iconName: {
    type: String,
    required: false
  }
})

const convertIconNameToKebabCase = (name: string) => {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
</script>

<template>
  <div class="flex w-full p-0 relative border-none">
    <input
      :type="type"
      :class="className"
      class="p-2 m-0 w-full text-sm rounded-sm dark:bg-slate-800 dark:border-slate-600 border-gray-300 shadow-sm dark:focus:border-slate-500 focus:border-indigo-300 focus:ring dark:focus:ring-slate-700 focus:ring-indigo-200 focus:ring-opacity-50"
      :placeholder="placeholder"
    />
    <v-icon
      v-if="iconName"
      class="absolute top-2/4 -translate-y-1/2 right-3 cursor-pointer"
      scale="1"
      fill="gray"
      :name="convertIconNameToKebabCase(iconName)"
      @click="$emit('emitHandleClickOnIcon')"
    />
  </div>
</template>
