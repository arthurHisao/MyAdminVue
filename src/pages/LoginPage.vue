<script setup lang="ts">
import InputComponent from '@/components/input/InputComponent.vue'
import { onBeforeMount, ref, reactive } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { getToken, login } = appStore
const { isLoading } = storeToRefs(appStore)

const formInputs = reactive({
  email: '',
  password: ''
})
const isShowingPassword = ref(false)

const handleClick = () => {
  isShowingPassword.value = !isShowingPassword.value
}

onBeforeMount(() => {
  getToken()
})

const handleSubmit = async () => {
  await login(formInputs)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mt-5 w-full h-auto">
    <label class="text-gray-700 dark:text-white font-light">E-mail</label>
    <InputComponent
      type="email"
      v-model:inputData="formInputs.email"
      placeholder="Informe o seu e-mail"
      class="mt-1 mb-5"
    />

    <label class="text-gray-700 dark:text-white font-light">Senha</label>
    <InputComponent
      :type="isShowingPassword ? 'text' : 'password'"
      v-model:inputData="formInputs.password"
      class="mt-1 mb-5"
      placeholder="Informe a sua senha"
      :iconName="isShowingPassword ? 'MdLockopenSharp' : 'MdLockoutline'"
      @emitHandleClickOnIcon="handleClick"
    />

    <div class="my-1 block">
      <a class="" href="#">Esqueceu a senha?</a>
      <button
        :disabled="isLoading"
        :class="isLoading ? 'opacity-50 cursor-wait' : 'opacity-100 cursor-pointer'"
        class="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-1 py-1 text-white font-medium w-full my-5 hover:bg-[#0b5ed7] hover:font-bold"
      >
        <svg
          v-if="isLoading"
          class="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Entrar
      </button>
    </div>
  </form>
</template>
