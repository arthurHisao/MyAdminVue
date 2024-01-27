<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import Breadcrumbs from '@/components/breadcrumbs/BreadcrumbsComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { sidebarStateCollapsed } = storeToRefs(appStore)
</script>

<template>
  <HeaderComponent />
  <SidebarComponent />
  <section
    :class="sidebarStateCollapsed ? 'lg:ml-16' : 'lg:ml-48'"
    class="py-4 px-4 h-screen bg-gray-100 dark:bg-slate-700"
  >
    <div class="container mx-auto">
      <Breadcrumbs />
      <router-view />
    </div>
  </section>
  <FooterComponent />
</template>
