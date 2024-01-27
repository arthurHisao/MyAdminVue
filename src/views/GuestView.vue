<script setup lang="ts">
import Logotype from '@/components/logotype/LogoComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <section class="bg-slate-100 dark:bg-slate-700 h-screen flex justify-center items-center">
    <div
      class="w-[400px] h-auto flex justify-center flex-col items-center bg-white dark:bg-slate-800 dark:shadow-dark-mode-sm dark:text-white shadow-md px-5"
    >
      <Logotype class="mt-3 p-1 w-24 h-auto" />
      <router-view />
    </div>
  </section>
</template>
