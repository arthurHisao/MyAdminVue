<script setup lang="ts">
import { OhVueIcon } from 'oh-vue-icons'

defineProps<{
  iconName: string
  scale: string
}>()

const convertIconNameToKebabCase = (name: string) => {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
</script>

<template>
  <OhVueIcon
    :scale="scale"
    :name="convertIconNameToKebabCase(iconName)"
    @click="$emit('emitHandleClickOnIcon')"
  />
</template>
